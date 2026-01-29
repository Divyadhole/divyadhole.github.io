const projectData = {
    uber: {
        title: "Uber Analytics Engineering",
        image: "https://raw.githubusercontent.com/Divyadhole/Uber-Analytics-Executive-Dashboard/main/images/dashboard.png", // Attempted guess, fallback to placeholder if needed
        description: `
            <p><strong>Full-stack data analytics application.</strong> Processed 10M+ ride records using GCP, Mage.ai, and visualized urban mobility trends in Looker Studio.</p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Volume:</strong> 148,000+ Validated Ride Records analyzed.</li>
                <li><strong>Revenue:</strong> Tracking ₹24.8M Gross Merchandise Value (GMV).</li>
                <li><strong>Advanced Navigation:</strong> Custom-built routing engine supporting deep-linking.</li>
                <li><strong>Interactive Dashboard:</strong> Draggable cards displaying real-time KPIs.</li>
            </ul>
            <h3>Tech Stack</h3>
            <p>GCP, Python, Mage.ai, Looker Studio, BigQuery</p>
        `,
        github: "https://github.com/Divyadhole/Uber-Analytics-Executive-Dashboard"
    },
    cybersecurity: {
        title: "Cybersecurity Dashboard",
        image: "images/project-placeholder.jpg", // Placeholder
        description: `
            <p><strong>Interactive dashboard for visualizing cyber threats.</strong> Features heatmap analysis, attack classification, and real-time threat monitoring.</p>
            <h3>Overview</h3>
            <p>This project aggregates data from various threat intelligence feeds to provide a real-time view of the security landscape. It uses Machine Learning models to classify incoming traffic and flag potential anomalies.</p>
            <h3>Tech Stack</h3>
            <p>Tableau, Python, Scikit-Learn, Pandas</p>
        `,
        github: "https://github.com/Divyadhole/The-Data-Miners-Datathon-project-"
    },
    tesla: {
        title: "Tesla Stock Analysis",
        image: "images/project-placeholder.jpg", // Placeholder
        description: `
            <p><strong>Time-series forecasting model for stock prices.</strong> Utilized ARIMA and LSTM neural networks to predict future valuations with high accuracy.</p>
            <h3>Methodology</h3>
            <p>The project involves scraping historical stock data, preprocessing it to remove noise, and training multiple models to compare performance. The LSTM model achieved the highest accuracy in predicting short-term trends.</p>
            <h3>Tech Stack</h3>
            <p>Python, Keras, TensorFlow, Pandas, Matplotlib</p>
        `,
        github: "https://github.com/INFO523-S24/project-01-Tech-Titans"
    },
    fightclub: {
        title: "Fight Club Analysis",
        image: "images/project-placeholder.jpg", // Placeholder
        description: `
            <p><strong>Data visualization project focusing on key insights and analytics.</strong> derived from the "Final Project" for INFO 526.</p>
            <h3>Overview</h3>
            <p>A comprehensive analysis using R and Tidyverse to explore datasets, uncover patterns, and present findings through reproducible Quarto reports. The project emphasizes clear storytelling with data.</p>
            <h3>Tech Stack</h3>
            <p>R, Tidyverse, Quarto, ggplot2</p>
        `,
        github: "https://github.com/INFO-526-S24/project-01-fight-club"
    },
    capstone: {
        title: "Bioinformatics Capstone",
        image: "https://raw.githubusercontent.com/Divyadhole/Capstone-project/main/poster/poster.png", // Likely valid path from README
        description: `
            <p><strong>Integrated workflow for evolutionary analysis.</strong> Covers the full pipeline from variant discovery and PSMC demographic reconstruction to advanced species distribution modeling.</p>
            <h3>Highlights</h3>
            <ul>
                <li><strong>PSMC Demographic Reconstruction:</strong> GATK-ready genomes to demographic curves.</li>
                <li><strong>MaxEnt Distribution Modeling:</strong> Species distribution models for present/future climates.</li>
                <li><strong>ABBA-BABA Testing:</strong> Sliding-window analysis of introgression signals.</li>
            </ul>
            <h3>Tech Stack</h3>
            <p>Python, Jupyter, Snakemake, Dsuite, R</p>
        `,
        github: "https://github.com/Divyadhole/Capstone-project"
    },
    ecommerce: {
        title: "E-commerce Sales Analytics",
        image: "https://raw.githubusercontent.com/Divyadhole/ecommerce-sales-analytics/main/dashboard_screenshot.png",
        description: `
            <p><strong>Interactive sales analytics dashboard with comprehensive business insights.</strong> Professional Power BI-themed dashboard featuring KPI tracking, trend analysis, and geographic visualizations.</p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>KPI Dashboard:</strong> Real-time tracking of revenue, profit, orders, and profit margins.</li>
                <li><strong>Trend Analysis:</strong> Year-over-year sales comparison with interactive visualizations.</li>
                <li><strong>Geographic Insights:</strong> State-wise performance analysis with interactive maps.</li>
                <li><strong>Business Recommendations:</strong> Data-driven insights for strategic decision-making.</li>
            </ul>
            <h3>Tech Stack</h3>
            <p>Python, Plotly, Pandas, NumPy, Power BI Design</p>
        `,
        github: "https://github.com/Divyadhole/ecommerce-sales-analytics"
    }
};

function openModal(projectId) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const project = projectData[projectId];

    if (!project) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
        </div>
        <div class="modal-image-container"> 
           <img src="${project.image}" onerror="this.src='https://via.placeholder.com/800x400?text=Project+Image'" alt="${project.title}" class="modal-image">
        </div>
        <div class="modal-desc">
            ${project.description}
        </div>
        <div class="modal-footer">
            <a href="${project.github}" target="_blank" class="btn-primary">View on GitHub</a>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
}
