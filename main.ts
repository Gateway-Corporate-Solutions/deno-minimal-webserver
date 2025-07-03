interface Consultant {
    name: string;
    expertise: string;
    bio: string;
}

const team: Consultant[] = [
    { name: 'Alice Johnson', expertise: 'Business Strategy', bio: 'Alice has over 10 years of experience in business strategy.' },
    { name: 'Bob Smith', expertise: 'Financial Planning', bio: 'Bob is a certified financial planner with a focus on small businesses.' },
    { name: 'Carol White', expertise: 'Market Analysis', bio: 'Carol specializes in market trends and consumer behavior.' },
    { name: 'David Brown', expertise: 'IT Solutions', bio: 'David is an IT expert with a knack for innovative solutions.' },
    { name: 'Eve Davis', expertise: 'Human Resources', bio: 'Eve has a wealth of experience in HR management and recruitment.' },
    { name: 'Frank Wilson', expertise: 'Project Management', bio: 'Frank is a seasoned project manager with a focus on efficiency.' }
];

function displayTeam() {
    const teamContainer = document.getElementById('team-container');
    if (teamContainer) {
        team.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.innerHTML = `<h3>${member.name}</h3><p><strong>Expertise:</strong> ${member.expertise}</p><p>${member.bio}</p>`;
            teamContainer.appendChild(memberDiv);
        });
    }
}

document.addEventListener('DOMContentLoaded', displayTeam);

const demoBtn = document.getElementById('demo-btn');
const productsBtn = document.getElementById('products-btn');
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');
const closeMenu = document.getElementById('close-menu');

demoBtn?.addEventListener('click', () => {
    alert('Demo feature coming soon!');
});

productsBtn?.addEventListener('click', () => {
    alert('Product details coming soon!');
});

menuBtn?.addEventListener('click', () => {
    if (dropdownMenu) {
        dropdownMenu.classList.add('show');
    }
});

closeMenu?.addEventListener('click', () => {
    if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
    }
});

