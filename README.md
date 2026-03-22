# Divya Dhole — Data Analyst Portfolio

**Live site:** [https://divyadhole.github.io](https://divyadhole.github.io)

MS Data Science at University of Arizona. I build data analysis projects using real government APIs — BLS, EPA, Federal Reserve, Census Bureau, DEA, CDC, and USDA. Every project has a live dashboard, a reproducible Python pipeline, SQL analysis, and an Excel workbook.

---

## 40 Projects in 20 Days Sprint

I am building 40 real-data projects in 20 days — 2 per day. Every project:
- Uses a **real government API** (no Kaggle datasets)
- Has a **live GitHub Pages dashboard**
- Has a complete **Python pipeline** with modular `src/` structure
- Has **SQL queries** in SQLite covering window functions, pivots, CTEs
- Has a **6-sheet Excel workbook**
- Has **6 publication-quality charts**

**Progress: 10 of 40 complete — Day 6 of 20**

---

## Live Projects

| # | Title | Data Source | Key Finding | Dashboard |
|---|---|---|---|---|
| P05 | The Great Resignation | BLS JOLTS API | Quit rate peaked 3.0% Nov 2021, +19.7% above baseline. p<0.001 | [Live](https://divyadhole.github.io/great-resignation-bls/) |
| P06 | What America Buys | Census Bureau MRTS | COVID crashed retail -23.2%. E-commerce jumped 5.5 years ahead of schedule | [Live](https://divyadhole.github.io/us-retail-sales-census/) |
| P07 | Are Workers Falling Behind? | Federal Reserve FRED | CPI peaked 9.1%. Fed hiked 0.05% to 5.33% — fastest since 1980s | [Live](https://divyadhole.github.io/inflation-wages-fred/) |
| P08 | Who Breathes Dirty Air? | EPA Air Quality System | PM2.5 down -42% since 2000. NYC AQI hit 218 from 2023 wildfires | [Live](https://divyadhole.github.io/epa-air-quality/) |
| P09 | Follow the Pills | DEA ARCOS + CDC WONDER | 109,680 OD deaths in 2022. 46% fentanyl. WV: 79.2/100K | [Live](https://divyadhole.github.io/opioid-crisis-dea-cdc/) |
| P10 | Where America Cannot Eat | USDA Food Access Atlas | 16.1M in food deserts. Black rate 10.8% vs 5.2% White. Native Am: 5.8 mi avg | [Live](https://divyadhole.github.io/food-deserts-usda/) |

---

## All Projects (23 repos)

### Healthcare
| Repo | Description | Stack |
|---|---|---|
| [hospital-readmissions](https://github.com/Divyadhole/hospital-readmissions) | 23.3% readmission rate. Logistic regression CV AUC 0.614. 4-tier risk stratification | Python, SQL, scikit-learn |
| [er-wait-time-analysis](https://github.com/Divyadhole/er-wait-time-analysis) | Avg door-to-doc 79.7 min. LWBS 2.23%. Night shift +55% longer. 10 SQL window function queries | Python, SQL, Excel |
| [Detecting-Service-Gaps-and-Bias-Signals-in-Hospital-Reviews](https://github.com/Divyadhole/Detecting-Service-Gaps-and-Bias-Signals-in-Hospital-Reviews) | NLP sentiment analysis on hospital reviews to detect service gaps and bias signals | Python, NLP, ML |

### Economics and Labor
| Repo | Description | Stack |
|---|---|---|
| [great-resignation-bls](https://github.com/Divyadhole/great-resignation-bls) | BLS JOLTS real data. Quit rate peaked 3.0% Nov 2021. Welch t p<0.001, Cohen's d 3.82 | Python, SQL, scipy, BLS API |
| [inflation-wages-fred](https://github.com/Divyadhole/inflation-wages-fred) | Federal Reserve FRED real data. CPI peaked 9.1%. Workers behind for 27 of 48 months | Python, SQL, FRED API |
| [us-retail-sales-census](https://github.com/Divyadhole/us-retail-sales-census) | Census Bureau real data. $8.5T retail 2023. COVID recovery in 4 months | Python, SQL, Census API |

### Investigative and Public Health
| Repo | Description | Stack |
|---|---|---|
| [pharma-payments-analysis](https://github.com/Divyadhole/pharma-payments-analysis) | CMS Open Payments. Paid doctors prescribe +64.1% more. Spearman r=0.134 p<0.001 | Python, SQL, scipy |
| [opioid-crisis-dea-cdc](https://github.com/Divyadhole/opioid-crisis-dea-cdc) | DEA ARCOS + CDC WONDER. 109,680 deaths 2022. 2.83B pills shipped at 2010 peak | Python, SQL, DEA, CDC |
| [food-deserts-usda](https://github.com/Divyadhole/food-deserts-usda) | USDA Food Access Atlas. 16.1M Americans in food deserts. Black 10.8% vs White 5.2% | Python, SQL, USDA |

### Environment
| Repo | Description | Stack |
|---|---|---|
| [epa-air-quality](https://github.com/Divyadhole/epa-air-quality) | EPA AQS real data. PM2.5 down -42% since 2000. NYC AQI 218 from 2023 wildfires | Python, SQL, EPA API, seaborn |

### Analytics and Business Intelligence
| Repo | Description | Stack |
|---|---|---|
| [retail-sales-analysis](https://github.com/Divyadhole/retail-sales-analysis) | 50K transactions, RFM segmentation, seasonality index, $8.97M revenue analysis | Python, SQL, Excel |
| [ecommerce-sales-analytics](https://github.com/Divyadhole/ecommerce-sales-analytics) | Interactive dashboard, KPI tracking, YoY trends, geographic visualization | Python, Plotly, Power BI |
| [Coffee-Sales-Dashboard](https://github.com/Divyadhole/Coffee-Sales-Dashboard) | Sales analysis across coffee product categories with trend analysis | Jupyter, pandas, matplotlib |
| [Uber-Analytics-Executive-Dashboard](https://github.com/Divyadhole/Uber-Analytics-Executive-Dashboard) | 10M+ ride records on GCP. Urban mobility trends in Looker Studio | GCP, Mage.ai, Looker, Python |
| [HR-Recruitment-Funnel](https://github.com/Divyadhole/HR-Recruitment-Funnel) | ML-powered recruitment intelligence platform. Funnel analytics with SQL and scikit-learn | Python, SQL, Streamlit |

### Machine Learning
| Repo | Description | Stack |
|---|---|---|
| [Ex-06-Classifying-Spam-Emails](https://github.com/Divyadhole/Ex-06-Classifying-Spam-Emails) | Spam classifier using Naive Bayes and SVM. Confusion matrix and feature importance | Python, scikit-learn, NLP |
| [Capstone-project](https://github.com/Divyadhole/Capstone-project) | Bioinformatics: PSMC demographic reconstruction, ABBA-BABA testing, max-entropy modeling | Python, Jupyter, Bioinformatics |

### Academic and Research
| Repo | Description | Stack |
|---|---|---|
| [The-Data-Miners-Datathon-project-](https://github.com/Divyadhole/The-Data-Miners-Datathon-project-) | Competitive datathon team project with data-driven analysis | R, tidyverse |
| [INFO536_Spring2025](https://github.com/Divyadhole/INFO536_Spring2025) | Graduate coursework: data science for public interest | R, ggplot2 |
| [Group-3](https://github.com/Divyadhole/Group-3) | Collaborative data science and public interest research | R |
| [INFO-536-Data-science-public-interset](https://github.com/Divyadhole/INFO-536-Data-science-public-interset) | Research on data science applications for social impact | R |

---

## Tech Stack

| Category | Tools |
|---|---|
| Languages | Python 3.10+, SQL, R, JavaScript |
| Data and ML | pandas, NumPy, scikit-learn, scipy, XGBoost (ROC-AUC 0.978), TensorFlow |
| Visualization | matplotlib, seaborn, Plotly, Chart.js, Power BI, Tableau, Looker |
| Databases | SQLite, PostgreSQL, AWS Aurora |
| Cloud | AWS (Glue, S3, EC2, Aurora), GCP (BigQuery, Looker Studio), Databricks |
| APIs | BLS JOLTS, Federal Reserve FRED, EPA AQS, Census Bureau, DEA ARCOS, CDC WONDER, USDA ERS |
| Other | Git, GitHub Pages, Mage.ai, Streamlit, Jupyter, Docker |

---

## Certifications (20+)

Databricks: AI:BI Analyst, Gen AI Fundamentals, ML at Scale, SQL Analytics  
AWS: Glue, Data Foundations, StationOps, Building LLMs on AWS, Dynamic Data Masking  
Udemy: Python Data Science Bootcamp, Practical SQL, Python for AI/ML, Python Automation, Power BI Masterclass, Docker Deep Dive, Python Masterclass  
Microsoft: Data Analysis and Visualization with Copilot  
Other: Business Data Analysis, Visualization for Leaders

---

## Education

**MS Data Science** — University of Arizona (2024–2025)  
Relevant coursework: Remote Sensing, Machine Learning, Big Data Analytics, Intelligent Systems, Data Science and Public Interest

**BE Electronics and Telecommunications** — Shri Sant Gajanan Maharaj College of Engineering (2022)

---

## Coming Next (Projects 11-40)

- P11: SEC EDGAR — Fortune 500 financial analysis
- P12: FBI UCR — Crime data trends
- P13: FEMA disasters vs poverty (FEMA + Census)
- P14: World Bank global development indicators
- P15: CMS Hospital Quality Stars (ML classification)
- P20: CDC Wonder — mortality disparities by race and income
- P40: CAPSTONE — merged CDC + BLS + Census + EPA + CMS

---

## Contact

Email: [divya.dhole@arizona.edu](mailto:divya.dhole@arizona.edu)  
LinkedIn: [linkedin.com/in/divya](https://www.linkedin.com/in/divya)  
GitHub: [github.com/Divyadhole](https://github.com/Divyadhole)  
Portfolio: [divyadhole.github.io](https://divyadhole.github.io)

---

*Open to Data Analyst and Data Scientist roles. OPT available. Based in Tucson, AZ — open to remote and relocation.*
