import { articles } from '../models/data.js' 


export const getAllArticle = (req,res) => {
    res.json(articles);
}

export const getArticleById =  (req, res) => {
    const articleId = parseInt(req.params.id);
    const article = articles.find(a => a.id === articleId);
    if (!article) return res.status(404).json({ error: 'Article not found' });
    res.json(article);
};

export const createArticle = (req, res) => {
    const { title, content,journalistId,categoryId} = req.body;
    if (!title|| !content || !journalistId || !categoryId) {
        return res.status(400).json({ error: 'title,content,journalistId,categoryId are required' });
    }

    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        journalistId,
        categoryId
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const { title, content,journalistId,categoryId } = req.body;

    const article = articles.find(a => a.id === articleId);
    if (!article) return res.status(404).json({ error: 'Article not found' });

    if (title) article.title = title;
    if (content) article.content = content;
    if (journalistId) article.journalistId = journalistId;
    if (categoryId) article.categoryId = categoryId;

    res.json(article);
};

export const deleteArticle = (req, res) => {
    const articleId = parseInt(req.params.id);
    const index = articles.findIndex(a => a.id === articleId);
    if (index === -1) return res.status(404).json({ error: 'Article not found' });

    articles.splice(index, 1);
    res.status(204).send();
};