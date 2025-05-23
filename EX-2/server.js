import express from 'express';
import { articles } from './models/data.js';
import articleRoutes from './routes/articleRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import journalistsRoutes from './routes/journalistRoutes.js';

const app = express();
app.use(express.json());
app.use('/articles',articleRoutes);
app.use('/journalists',journalistsRoutes);
app.use('/categories',categoryRoutes);
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json(articles)
// });

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});   