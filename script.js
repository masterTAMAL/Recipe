document.querySelectorAll('[data-recipe]').forEach(card => {
    const toggleIngredientsBtn = card.querySelector('[data-toggle-ingredients]');
    const ingredientsList = card.querySelector('ul');

    const toggleStepsBtn = card.querySelector('[data-toggle-steps]');
    const stepsList = card.querySelector('ol');

    const startCookingBtn = card.querySelector('[data-start]');
    const nextStepBtn = card.querySelector('[data-next]');
    const steps = stepsList.querySelectorAll('li');
    const progressBar = card.querySelector('.progress-bar');

    let currentStep = 0;

    toggleIngredientsBtn.addEventListener('click', () => {
        ingredientsList.classList.toggle('hidden');
        toggleIngredientsBtn.textContent = ingredientsList.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
    });

    toggleStepsBtn.addEventListener('click', () => {
        stepsList.classList.toggle('hidden');
        toggleStepsBtn.textContent = stepsList.classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
    });

    startCookingBtn.addEventListener('click', () => {
        stepsList.classList.remove('hidden');
        steps.forEach(step => step.classList.remove('highlight'));
        currentStep = 0;
        steps[currentStep].classList.add('highlight');
        updateProgressBar();
        startCookingBtn.classList.add('hidden');
        nextStepBtn.classList.remove('hidden');
    });

    nextStepBtn.addEventListener('click', () => {
        steps[currentStep].classList.remove('highlight');
        currentStep++;
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('highlight');
            updateProgressBar();
        } else {
            progressBar.style.width = '100%';
            nextStepBtn.textContent = 'Done!';
            nextStepBtn.disabled = true;
        }
    });

    function updateProgressBar() {
        let progress = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = progress + '%';
    }
});