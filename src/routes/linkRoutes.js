const express = require("express");
const router = express.Router();
const linkController = require("../controllers/linkController");

/**
 * @swagger
 * tags:
 *   name: Links
 *   description: Gerenciamento de Links
 */

/**
 * @swagger
 * /api/links:
 *   get:
 *     summary: Retorna todos os links cadastrados
 *     tags: [Links]
 *     responses:
 *       200:
 *         description: Lista de links cadastrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "65eb4f2a23f4b63abc123456"
 *                   title:
 *                     type: string
 *                     example: "Documentação do Node.js"
 *                   url:
 *                     type: string
 *                     example: "https://nodejs.org/en/docs/"
 *                   category:
 *                     type: string
 *                     example: "backend"
 *                   tags:
 *                     type: array
 *                     items:
 *                       type: string
 *                     example: ["node", "backend", "javascript"]
 */
router.get("/", linkController.getAllLinks);

/**
 * @swagger
 * /api/links:
 *   post:
 *     summary: Cria um novo link
 *     tags: [Links]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Documentação do Express"
 *               url:
 *                 type: string
 *                 example: "https://expressjs.com/"
 *               category:
 *                 type: string
 *                 example: "backend"
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["express", "backend", "node"]
 *     responses:
 *       201:
 *         description: Link criado com sucesso
 */
router.post("/", linkController.createLink);

/**
 * @swagger
 * /api/links/{id}:
 *   delete:
 *     summary: Exclui um link pelo ID
 *     tags: [Links]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: "65eb4f2a23f4b63abc123456"
 *     responses:
 *       204:
 *         description: Link excluído com sucesso
 */
router.delete("/:id", linkController.deleteLink);

module.exports = router;
