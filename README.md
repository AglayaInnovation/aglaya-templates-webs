# aglaya-templates-webs


## Description
Contains the templates for the web pages of the AGLAYA project.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/AglayaInnovation/aglaya-templates-webs.git
   ```

2. Navigate to the project directory:
   ```
   cd aglaya-templates-webs
   ```

3. Install the dependencies:
   ```
   yarn install
   ```

## Using the Create Template Script

This project includes a custom script for creating templates using the Aglaya CLI.

### Script Usage

To create a new template, use the following command:

```
yarn create:template -- <NAME_TEMPLATE>
```

Replace `<NAME_TEMPLATE>` with the desired name for your template.

### Example

To create a template named "my-awesome-template", run:

```
yarn create:template -- my-awesome-template
```

This command will execute the Aglaya CLI and create a new template with the specified name.

### Notes

- Make sure to include the double dash (`--`) before the template name when using npm. This separates the npm command from the arguments passed to the script.
- If you're using Yarn, you can omit the double dash:
  ```
  yarn create:template my-awesome-template
  ```

## Troubleshooting

If you encounter any issues:

1. Ensure that you have the latest version of the Aglaya CLI installed.
2. Check that your Node.js and npm versions are up to date.
3. If the problem persists, please open an issue in this repository with a detailed description of the error.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
