const cl=console.log;
const app=require("./app");
const PORT=3000;



app.listen(PORT, () => {
    cl(`Server is running on port ${PORT}`);
}); 