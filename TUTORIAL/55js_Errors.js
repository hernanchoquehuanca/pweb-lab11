// JS Errors: Handling an Error
try {
  // Code that may throw an error
  throw new Error("This is a custom error");
} catch (error) {
  console.error("Caught an error:", error.message);
}
