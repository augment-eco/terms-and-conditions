# Augment Mobility Ab - Terms and Conditions

This repository contains draft versions of the terms and conditions for the [augment.eco](https://augment.eco) service, operated by Augment Mobility Ab.

**Important!** The legally binding terms and conditions are available at https://augment.eco/en/contract-of-service/. The files in this repository are **for reference** and **in-progress work only** — they are not legally binding.

## How to Edit

1. **Choose the file you want to edit** (e.g. [escoot/fi-fi/augment-sopimusehdot-fi-fi.md](./escoot/fi-fi/augment-sopimusehdot-fi-fi.md)).
2. **Use a markdown editor** of your choice, such as [Dillinger](https://dillinger.io) or [StackEdit](https://stackedit.io), to make changes. Be sure to check the [Special Markup](#special-markup) section below for handling specific formatting requirements.
3. **Submit the updated file** to the repository once your edits are complete.

### Special Markup

The following patterns are used in markdown files for specific formatting:

- **Hard page break**: To force content to the next page in a PDF, use `<div class="page"></div>`.
- **Full-width underline**: For a full-width underline, use `<div class="underline"></div>`.

## Generating PDFs

GitHub Actions will automatically generate and commit a PDF version for pull requests involving changes to markdown files. Additionally, a preview of the changes will be made available as a comment on the pull request.

### Local testing

If we want to preview the PDF locally before submitting a pull request, to check our page breaks, for example, we can do so by running the following command:

```bash
npm run generate "<path-to-file>.md" "test-preview.pdf" true
```

It will generate the PDF file from the specified Markdown file. Do not upload this test file.

## Linting

All markdown files are being linted while running Continous Integration (CI). The generate of PDFs will fail, in case linting errors are found. The linting is done using [markdownlint](https://github.com/DavidAnson/markdownlint-cli2). The configuration can be found in the [.markdownlint-cli2.jsonc](./.markdownlint-cli2.jsonc) file.

You can also lint the markdown files locally by running the following command:

```bash
npm run lint
```

Also, in the case you are using VSCode, you can install the [markdownlint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) to lint the markdown files while editing.
