document.addEventListener("DOMContentLoaded", () => {
    const modalWindowEdit = document.querySelector(".modal-wrapper-edit"),
        modalWindowAdd = document.querySelector(".modal-wrapper-add"),
        inputs = document.querySelectorAll("input"),
        editBtn = document.querySelectorAll(".edit-btn"),
        saveBtn = document.querySelector(".save-btn"),
        updateBtn = document.querySelector(".update-btn"),
        delBtn = document.querySelectorAll(".delete-btn"),
        closeModalSymbEdit = document.querySelectorAll(".close-modal-edit"),
        closeModalSymbAdd = document.querySelectorAll(".close-modal-add"),
        addCommittee = document.querySelector("#add-committee")

    function checkInvalidSymb(input) {
        return input.value.trim().length <= 0
    }

    inputs.forEach(item => {
        item.addEventListener("change", () => {
            if (checkInvalidSymb(item)) {
                item.style.backgroundColor = ""
            }
        })
    });


    // modal window with editing committee

    function openModalWindowEdit() {
        modalWindowEdit.classList.replace("hide", "active");
    }

    function closeModalWindowEdit() {
        modalWindowEdit.classList.replace("active", "hide");
    }

    modalWindowEdit.addEventListener("click", (e) => {
        if (e.target == e.currentTarget) {
            closeModalWindowEdit();
        }
    })

    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape") {
            closeModalWindowEdit();
        }
    })

    editBtn.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            saveBtn.value = e.target.value;
            openModalWindowEdit();
        })
    })

    saveBtn.addEventListener("click", () => {
        closeModalWindowEdit();
    })

    closeModalSymbEdit.forEach(item => {
        item.addEventListener("click", () => {
            closeModalWindowEdit();
        })
    })


    // modal window with adding committee

    function openModalWindowAdd() {
        modalWindowAdd.classList.replace("hide", "active");
    }

    function closeModalWindowAdd() {
        modalWindowAdd.classList.replace("active", "hide");
    }

    addCommittee.addEventListener("click", (e) => {
        e.preventDefault();
        openModalWindowAdd();
    })

    modalWindowAdd.addEventListener("click", (e) => {
        if (e.target == e.currentTarget) {
            closeModalWindowAdd();
        }
    })

    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape") {
            closeModalWindowAdd();
        }
    })

    updateBtn.addEventListener("click", () => {
        closeModalWindowAdd();
    })

    closeModalSymbAdd.forEach(item => {
        item.addEventListener("click", () => {
            closeModalWindowAdd();
        })
    })
})