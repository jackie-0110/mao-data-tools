# MAO Data Tools
[![Sheets](https://img.shields.io/badge/Google%20Sheets-Test%20Files-blue?logo=google-sheets)](https://docs.google.com/spreadsheets/d/1RUHCtHSiIjbUJGKJsoz-mWUNC8S5xuLyp5CbG0-y6u8/edit?gid=1610275626#gid=1610275626)

[![FAMAT Test Bank](https://img.shields.io/badge/FAMAT-Test%20Bank-green?logo=https://www.pcsb.org/cms/lib/FL01903687/Centricity/Domain/2892/image_439933586141692878548053.png)](https://famat.org/test-bank/)

## Table of Contents

- [Project Files](#project-files)
  - [Test Name Normalizer](#recursive-folder-scanner)
  - [PDF to LaTeX Question Parser](#pdf-to-latex-question-parser)
  - [Recursive Folder Scanner](#recursive-folder-scanner)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Dev Setup](#dev-setup)
- [Contributing](#contributing)
  - [Pull Requests](#pull-requests) 

## Project Files

### Test Name Normalizer
Standardizes inconsistent math competition file names using LLM-based heuristics.

Given a messy set of filenames from a math archive, this tool parses and reorders them into a consistent format:
{Year} {Month or Event} {Event Type} {Division} {Test Type}
It uses an LLM to handle abbreviation correction, ordering, and inference of missing data, then exports the results to CSV.

### PDF to LaTeX Question Parser
Extracts LaTeX-formatted questions and choices from MAO test PDFs.

Splits a PDF into individual pages, sends them to a language model, and parses JSON-formatted questions. Extracts fields question_text and answer_choices, cleans formatting, and exports everything into a structured CSV for use in MuAlphaTester.

### Recursive Folder Scanner
Crawls Google Drive folders and collects file metadata.

Recursively scans a folder in Google Drive (including subfolders) and extracts the name, URL, type, and last modified date of all PDF/image files. Results are exported into a Google Sheet for further processing by the PDF Renamer or PDF Processor.

## Getting Started

### Prerequisites

- Jupyter: <https://jupyter.org/install>
- Python: <https://www.python.org/downloads/>
- VSCode: <https://code.visualstudio.com/download>

Optional:

- Anaconda for managing Python virtual environments: <https://www.anaconda.com/download>

### Dev Setup

To setup your vscode environment, you will need to create a python virtual environment and install the packages found in `requirements.txt` and `requirements.dev.txt`.

This command will create a new python environment with venv and install the necessary packages:



## Contributing

To contribute to the project, you can work on any issues not claimed by anyone. Any unassigned issue is fair-game, if anyone comes across this project and I have an issue open I'm happy to accept help :D.

It is recommended to open smaller pull requests (PRs) 

### Pull Requests

It is recommended to format your code before making a PR, but it's not required.
