const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); // This is used to read your OpenAPI YAML file.

// Serve Swagger UI at '/api-docs'
const swaggerDocument = YAML.load('./Application-Form.yaml'); // Replace with your file path.
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
