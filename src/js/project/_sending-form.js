import GraphModal from 'graph-modal';

new GraphModal({
    isOpen: (modal) => {
        if (modal.modalContainer.dataset.graphTarget === 'modal-sign-in-form') {
            modal.modalContainer.offsetParent.classList.add('graph-modal--info')
            new GraphModal('modal').open('modal-sign-in-info');
        }
    }
});

const submitFormHandler = (formId, nextModalClass) => {

    if (!formId || !nextModalClass) return null

    const form = document.getElementById(formId)

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const parentModal = form.closest('.graph-modal-open')

            if (parentModal) {
                const closeButton = parentModal.querySelector('.graph-modal__close');
                
                closeButton && closeButton.click();
                new GraphModal('modal').open(nextModalClass);
            }
        })
    }
}

submitFormHandler('modal-restore-form', 'modal-restore-access-success')
submitFormHandler('modal-sign-up-form', 'modal-registration-success')