# README Project Structure Generator

## Description
A lightweight program that generates a README.md file for the project's directory structure based on a config.

## Table of Contents
- [File Structure](#file-structure)
- [Prerequisites](#prerequisites)
- [Implementation](#implementation)
  - [General](#general)
  - [Config Modification](#config-modification)
- [Contributing](#contributing)
- [License](#license)

## File Structure
```
.
├── src
│   ├── config.ts			# Project Structure Config
│   ├── index.ts			# Project Entry
│   └── README.md			# Generated README
├── .gitignore				# Git Ignore
├── package.json			# Project Dependencies
└── README.md				# Project README
```

## Prerequisites
- [Node.js](https://nodejs.org/en/)

## Implementation

### General
1. Clone the repository with `git clone git@github.com:laub1199/readme-project-structure-generator.git`
2. Run `npm install` to install dependencies
3. Edit the `src/config.ts` file to your liking
4. Run `npm run gen` to generate the README.md file
5. Output will be in `src/README.md`

### Config Modification
The `src/config.ts` file contains the configuration for the project structure, edit the `projectStructure` variable to your liking. The `projectStructure` variable is an array of objects, each object represents a directory.
<br><br>
The `projectStructure` variable is in a key-value pair format, where the key is the directory name while the value can be either a string or a object.
<br>
For example, if the value is a string, the string will be the directory's description.
```typescript
const projectStructuer = {
    'src': 'Source Code',
    'dist': 'Distribution Code',
    'node_modules': '',
    '...': '',
}

// The above will generate the following:
// .
// ├── src                  # Source Code
// ├── dist                 # Distribution Code
// ├── node_modules
// └── ...
```

If the value is an object, the object will contain the directory's description and the directory's sub-directories.
```typescript
const projectStructuer = {
    'src': {
        'index.ts': 'Project Entry',
        'subDirectories': {
            'config': 'Configuration Files',
            'index.ts': 'Project Entry'
        }
    }
}

// The above will generate the following:
// .
// └── src
//     ├── index.ts         # Project Entry
//     └── subDirectories
//         ├── config       # Configuration Files
//         └── index.ts     # Project Entry
```

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

### General Steps
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See [LICENSE](LICENSE.txt) for more information.