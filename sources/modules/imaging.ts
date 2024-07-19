export function rotateImage(src: Uint8Array, angle: '90' | '180' | '270' |'0') {
    return new Promise<Uint8Array>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;
            ctx.rotate(angle === '90' ? Math.PI / 2 : angle === '180' ? Math.PI :  angle === '270' ? Math.PI * 1.5: 0);
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.drawImage(img, -img.width / 2, -img.height / 2);
            canvas.toBlob(blob => {
                if (blob) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        resolve(new Uint8Array(reader.result as ArrayBuffer));
                    };
                    reader.readAsArrayBuffer(blob);
                } else {
                    reject('Failed to rotate image');
                }
            }, 'image/jpeg');
        };
        img.src = URL.createObjectURL(new Blob([src]));
    });
}