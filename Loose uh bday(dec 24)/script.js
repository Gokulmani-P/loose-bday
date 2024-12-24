function showPart2() {
    document.getElementById('part1').classList.add('hidden');
    document.getElementById('part2').classList.remove('hidden');
}

function showPart3() {
    document.getElementById('part2').classList.add('hidden');
    document.getElementById('part3').classList.remove('hidden');
}

function showPart4() {
    document.getElementById('part3').classList.add('hidden');
    document.getElementById('part4').classList.remove('hidden');
}

function showPart5() {
    document.getElementById('part4').classList.add('hidden');
    document.getElementById('part5').classList.remove('hidden');
}

function showLoading() {
    document.getElementById('part5').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('videoContainer').classList.remove('hidden');
    }, 3000);
}

function showHearts() {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${i * 0.2}s`;
        heartsContainer.appendChild(heart);
    }
    heartsContainer.classList.remove('hidden');
}
function showLoading() {
    document.getElementById('part5').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');
    
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('videoContainer').classList.remove('hidden');
        
        // Autoplay video
        const video = document.getElementById('birthdayVideo');
        video.play();
    }, 3000);
}
