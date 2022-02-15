let bioBox=document.querySelector('#makebold');
let bioButton=document.querySelector('.btn2');

bioButton.addEventListener('mouseover',makeBioBold);
bioButton.addEventListener('mouseout',restoreDefault);

let blogButton=document.querySelector('#blog-button');
blogButton.addEventListener('mouseover',enlargeBlog);
blogButton.addEventListener('mouseout',defaultBlog);

let lofibollyButton=document.querySelector('#lofibolly-button');
lofibollyButton.addEventListener('mouseover',enlargeLofibolly);
lofibollyButton.addEventListener('mouseout',defaultLofibolly);

let twitter=document.querySelector('#twitter');
twitter.addEventListener('mouseover',enlargeTwitter);
twitter.addEventListener('mouseout',defaultTwiter);

let github=document.querySelector('#github');
github.addEventListener('mouseover',enlargeGithub);
github.addEventListener('mouseout',defaultGithub);

let linkedin=document.querySelector('#linkedin');
linkedin.addEventListener('mouseover',enlargeLinkedin);
linkedin.addEventListener('mouseout',defaultLinkedin);


function makeBioBold(e){
    bioBox.style.color='#000000';
    bioBox.style.fontWeight='bold';
    bioButton.style.border='1px solid black';
}

function restoreDefault(e){
    bioBox.style.color='rgb(95, 91, 91)';
    bioBox.style.fontWeight='bold';
    bioButton.style.border='1px solid gray';
}

function enlargeBlog(e){
    blogButton.style.padding='16px 205px';
}

function defaultBlog(e){
    blogButton.style.padding='15px 200px';
}

function enlargeLofibolly(e){
    lofibollyButton.style.padding='16px 205px';
}

function defaultLofibolly(e){
    lofibollyButton.style.padding='15px 200px';
}

function enlargeTwitter(e){
    twitter.style.width='35px';
    twitter.style.height='auto';
}

function defaultTwiter(e){
    twitter.style.width='32px';
    twitter.style.height='auto';
}

function enlargeGithub(e){
    github.style.width='35px';
    github.style.height='auto';
}

function defaultGithub(e){
    github.style.width='32px';
    github.style.height='auto';
}

function enlargeLinkedin(e){
    linkedin.style.width='35px';
    linkedin.style.height='auto';
}

function defaultLinkedin(e){
    linkedin.style.width='32px';
    linkedin.style.width='auto';
}