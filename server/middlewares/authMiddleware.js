const verifyToken = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("Decoded JWT:", decoded); // 👈 Add this
    next();
  } catch (err) {
    console.error("JWT verification failed:", err); // 👈 Add this
    res.status(401).json({ error: "Unauthorized" });
  }
};
