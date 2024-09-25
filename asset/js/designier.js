const designers = [
    {
      id: 1,
      name: "Alice Smith",
      specialization: "Interior Design",
      experience: "10 years",
      contactEmail: "alice@example.com",
      portfolio: "http://example.com/alice-portfolio",
      image: "asset/img/index/designer1.jpg"
    },
    {
      id: 2,
      name: "John Doe",
      specialization: "Furniture Design",
      experience: "8 years",
      contactEmail: "john@example.com",
      portfolio: "http://example.com/john-portfolio",
      image: "asset/img/index/designer2.jpg"
    },
    {
      id: 3,
      name: "Emma Brown",
      specialization: "Lighting Design",
      experience: "5 years",
      contactEmail: "emma@example.com",
      portfolio: "http://example.com/emma-portfolio",
      image: "asset/img/index/designer3.webp"
    }
  ];

  // Function to render the designer cards
  function renderDesigners(designers) {
    const designerList = document.getElementById("designerList");
    designerList.innerHTML = ""; // Clear existing content

    designers.forEach(designer => {
      const div = document.createElement("div");
      div.classList.add("col-12", "col-md-4", "mb-4");
      div.innerHTML = `
        <div class="card h-100 designer-card">
          <img src="${designer.image}" class="card-img-top" alt="${designer.name}">
          <div class="card-body">
            <h5 class="card-title">${designer.name}</h5>
            <p><b>Specialization:</b> ${designer.specialization}</p>
            <p><b>Experience:</b> ${designer.experience}</p>
            <a href="${designer.portfolio}" target="_blank" class="btn btn-dark">View Portfolio</a>
            <button class="button mt-2" onclick="contactDesigner('${designer.contactEmail}')">Contact</button>
          </div>
        </div>
      `;
      designerList.appendChild(div);
    });
  }

  // Function to contact designer via email
  function contactDesigner(email) {
    window.location.href = `mailto:${email}`;
  }

  // Initial render of the designers
  renderDesigners(designers);