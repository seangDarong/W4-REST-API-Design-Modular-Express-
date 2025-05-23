import { journalists, articles } from '../models/data.js';

export const getAllJournalist = (req, res) => {
    res.json(journalists);
};

export const getJournalistById = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });
    res.json(journalist);
};

export const createJournalist = (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'name and email are required' });
    }

    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const { name, email } = req.body;

    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.json(journalist);
};

export const deleteJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const index = journalists.findIndex(j => j.id === journalistId);
    if (index === -1) return res.status(404).json({ error: 'Journalist not found' });

    journalists.splice(index, 1);
    res.status(204).send();
};

export const getArticlesByJournalist = (req, res) => {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === journalistId);
    if (!journalist) return res.status(404).json({ error: 'Journalist not found' });

    const result = articles.filter(article => article.journalistId === journalistId);
    res.json(result);
};
