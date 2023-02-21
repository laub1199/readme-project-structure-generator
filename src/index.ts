import * as fs from 'fs'
import * as path from 'path'
import { projectStructure } from './config'

const constructStructure = (setting: Object, level: number) => {
  const lastIndex = Object.keys(setting).length - 1
  let count = 0
  for (const [key, value] of Object.entries(setting)) {
    let line = ''

    for (let i = 0; i < level; i++) {
      if (i === level - 1) {
        line += '│   '
      } else {
        line += '   '
      }
    }

    if (count === lastIndex) {
      line += '└── '
    } else {
      line += '├── '
    }

    line += key

    const numberOfTabs = 8 - Math.ceil((line.length + 1) / 4)

    if (typeof value === 'string') {
      if (value !== '') {
        for (let i = 0; i < numberOfTabs; i++) {
          line += '\t'
        }
        line += `# ${value}\n`
      } else {
        line += '\n'
      }

      readme += line
    } else {
      line += '\n'
      readme += line
      constructStructure(value, level + 1)
    }
    count++
  }
}

let readme = '```\n'

readme += '.\n'

constructStructure(projectStructure, 0)

readme += '```'

fs.writeFileSync(path.join(__dirname, 'README.md'), readme)
