export const error404 = (req, res) => {
  return res.status(404).json({ message: `Rota ${req.originalUrl} não encontrada.` })
}