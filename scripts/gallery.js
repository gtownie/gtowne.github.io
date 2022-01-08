


// change this number when you add images to photography folder
var photoCount = 30;

// change this number when you add images to art folder
var artCount = 3;

function getFiles(directory, count) {
    let files = [];
    for (let i =1; i<= count; i++) {
        files.push(`${directory}/${i}.jpg"`);
    }
    return files;
}

export function makeGallery(directory, images) {
    var size = Object.keys(images).length;
    for (let i = 1; i<=size; i++) {
        let container = document.createElement('div');
        let image = document.createElement('img');
        let link = document.createElement('a');
        
        let filename = `${directory}/${i}.jpg`;
        console.log(filename);
        image.setAttribute('src', filename);

        let href = "#lightbox-" + 'n';
        link.setAttribute('href', href)
        container.appendChild(image);
        container.appendChild(link);
        document.getElementById('gallery').appendChild(container);
        console.log(document.getElementById('gallery'));
    }

    makeLightbox(directory, images);
}



function makeLightbox(directory, images) {
    var size = Object.keys(images).length;

    for(let i = 1; i<=size; i++) {
        
        // create lightbox outer div
        let lightbox = document.createElement('div');
        lightbox.setAttribute('id', `lightbox-${i}`);
        lightbox.setAttribute('class', 'lightbox');

        // create the content div
        let content = document.createElement("div");
        content.setAttribute('class', 'content');

        // create the image element
        let image = document.createElement('img');
        image.setAttribute('src', `${directory}/${i}.jpg`);

        // create the title div
        let title = document.createElement('div');
        title.content = images[i];

        // create the closing link
        let closeButton = document.createElement('a');
        closeButton.setAttribute('class', 'close');
        closeButton.setAttribute('href', '#gallery')

        // routing

        content.appendChild(image);
        content.appendChild(title);
        content.appendChild(closeButton);
        lightbox.appendChild(content);
        document.querySelector('body').appendChild(lightbox);

    }
}

