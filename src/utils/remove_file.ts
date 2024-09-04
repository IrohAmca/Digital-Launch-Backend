import fs from 'fs';

function removeFile(path: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if (err) {
                console.error('Error', err);
                resolve(false);
            } else {
                resolve(true);
            }
        });
    });
}

export { removeFile };