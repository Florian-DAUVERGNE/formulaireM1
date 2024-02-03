import { accessSync, constants } from 'fs';
import { exec } from 'child_process';

const filesToCheck = ['ca.crt', 'ca.key', 'cert.crt', 'cert.key'];

const commandToRun = 'npx mkcert create-ca && npx mkcert create-cert';

const missingFiles = filesToCheck.filter((file) => {
  try {
    accessSync(file, constants.F_OK);
    return false;
  } catch (err) {
    return true;
  }
});

if (missingFiles.length > 0) {
  exec(commandToRun, (error, stdout, stderr) => {
    if (error) {
      console.error(
        `Erreur lors de l'exécution de la commande : ${error.message}`,
      );
      process.exit(1);
    }

    console.log(`Certificats créés avec succès : \n${stdout}`);
    process.exit(0);
  });
}
