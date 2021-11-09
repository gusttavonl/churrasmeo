import moduleAlias from 'module-alias'
import * as path from 'path'

const files = path.resolve(__dirname, '../../../')

moduleAlias.addAliases({
  '@': path.join(files, 'src')
})
