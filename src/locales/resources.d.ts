interface Resources {
  "translation": {
    "common": {
      "cancel": "Cancel",
      "close": "Close",
      "error": "Error",
      "hello": "Hello World",
      "loading": "Loading...",
      "save": "Save",
      "welcome": "Welcome"
    },
    "header": {
      "logoAlt": "Daniel Porto",
      "switchToDarkMode": "Switch to dark mode",
      "switchToLightMode": "Switch to light mode",
      "viewSourceCode": "View source code"
    },
    "hero": {
      "cta": {
        "contact": "Get in Touch",
        "downloadCV": "Download CV",
        "viewMetrics": "View Metrics",
        "viewProjects": "View Projects"
      },
      "description": "Transforming ideas into scalable digital solutions",
      "greeting": "Hello, I'm",
      "location": "Rio de Janeiro, Brazil",
      "name": "Daniel Porto",
      "social": {
        "email": "Send email",
        "github": "Visit GitHub profile",
        "linkedin": "Visit LinkedIn profile"
      },
      "subdescription": "FullStack Developer with 10+ years of experience. Specialized in React Web applications, C# backend services, and React Native mobile development. Passionate about building robust APIs, seamless integrations, and delivering exceptional user experiences.",
      "techStack": "Tech Stack",
      "title": "Fullstack Developer | C# | JavaScript | TypeScript"
    },
    "home": {
      "subtitle": "React + TypeScript + Vite + Tailwind CSS",
      "title": "Hello World"
    },
    "language": {
      "selectLanguage": "Select Language",
      "selectLanguageAriaLabel": "Select language",
      "selectLanguageDescription": "Choose your preferred language"
    },
    "metrics": {
      "cls": "CLS",
      "cls_desc": "Visual stability (layout shifts) during load.",
      "fcp": "FCP",
      "fcp_desc": "Time until the first content appears on screen.",
      "inp": "INP",
      "inp_desc": "How quickly the page responds to interactions.",
      "lcp": "LCP",
      "lcp_desc": "Time until the largest element is visible.",
      "note": "Measured in your browser (INP updates after interaction).",
      "title": "Site metrics",
      "ttfb": "TTFB",
      "ttfb_desc": "Time to first byte from the server."
    },
    "projects": {
      "companies": {
        "fu2re": {
          "description": "Development of smart solutions including mobile applications, web platforms, and asset management systems.",
          "location": "Rio de Janeiro and Region, Brazil",
          "name": "fu2re smart solutions",
          "period": "August 2019 - June 2023",
          "projects": {
            "smartAssets": {
              "categories": {
                "backend": {
                  "items": ["Developed REST API in Python (Bottle) for real-time geographic position management and storage of data captured in the field, supporting up to 40 requests per second", "Implemented endpoints for communication between the web application and hardware systems (cameras and GPS) via local WiFi network", "Created system for processing and storing georeferenced data and images in PostgreSQL", "Configured synchronization system with queue and automatic retry to ensure data delivery even in case of temporary failures", "Implemented complete monitoring and logging for system traceability and debugging"],
                  "name": "Backend & API"
                },
                "frontend": {
                  "items": ["Fully developed a React web application for vehicle navigation in the field, running on tablets and functioning completely offline", "Implemented integration via local WiFi with embedded camera system and GNSS receiver for real-time image capture and geographic positioning", "Created local storage system with PostgreSQL and physical image storage, allowing continuous operation even without internet connection", "Developed automatic synchronization system for migrating captured data to Azure when connection is available, with batch processing for optimization"],
                  "name": "Web Application & Navigation"
                }
              },
              "description": "Solution for automated inventory of public lighting assets using computer vision, embedded cameras, and integrated GNSS. Maps poles, lamps, and transformers with high accuracy, up to 100 times faster than traditional methods, generating structured and auditable data integrated with GIS systems.",
              "name": "SmartAssets"
            },
            "smartVision": {
              "categories": {
                "backend": {
                  "items": ["Developed APIs in C# with .NET 10 to fully support the ReactJS application, integrating the entire model training and inference queue", "Created and structured asynchronous processes with Hangfire and later migrated to Azure Queue for better scalability", "Implemented CQRS architecture where data entry was done with MySQL (facilitating the Vision team's queries) and consolidated frontend data queries were done in MongoDB", "Performed complete migration to Azure Container Apps with microservices architecture, decomposing the system into 8 microservices by domain", "Configured inter-service communication using message queues and HTTP requests, with 8 main containers and multiple replicas with autoscaling configured", "Developed image and video upload and processing system capable of processing up to 1TB of data per day for model training"],
                  "name": "Backend & Architecture"
                },
                "devops": {
                  "items": ["Structured and implemented complete CI/CD for both backend and frontend", "Configured automated deployment pipelines for Azure Container Apps"],
                  "name": "DevOps & CI/CD"
                },
                "frontend": {
                  "items": ["Developed intuitive no-code interface with ReactJS, Redux, and Styled Components to facilitate use by non-technical teams", "Implemented complete image classification and labeling workflow on the platform", "Created validation dashboards with accuracy metrics and confusion matrix for model performance analysis"],
                  "name": "Frontend & UX"
                }
              },
              "description": "No-code platform for training and inference of AI/Computer Vision models that democratizes access to artificial intelligence. Enables business teams to train and update models quickly, without requiring advanced technical knowledge, through an intuitive interface for upload, classification, labeling, training, validation, and model deployment.",
              "name": "SmartVision AI"
            }
          },
          "role": "Senior FullStack Developer"
        },
        "fulllab": {
          "description": "Development of e-commerce solutions and integrations with retail platforms, including APIs, plugins, and data migration systems.",
          "location": "Rio de Janeiro and Region, Brazil",
          "name": "Fullab | retail solutions",
          "period": "May 2017 - August 2019",
          "projects": {
            "mobfiq": {
              "categories": {
                "architecture": {
                  "items": ["Completely restructured the project to support new client demands", "Implemented common API for all clients with dependency injection for new platforms and specific scenarios"],
                  "name": "Architecture & API"
                },
                "integration": {
                  "items": ["Developed integration API with VTEX e-commerce platform using .NET 4.5, Dapper, and MySQL, supporting thousands of clients", "Conducted extensive reverse engineering study of VTEX platform behavior over weeks/months (no documentation was available)", "Implemented complete integration with VTEX's entire purchase process (orders, products, inventory, cart, checkout)", "Created alert system to detect changes in the VTEX platform and quickly adapt the integration when necessary", "Developed endpoints for mobile application and integration with third-party systems"],
                  "name": "Integration & E-commerce"
                }
              },
              "description": "E-commerce integration platform developed to connect retail systems. Complete platform restructuring to support new client demands, with modern architecture and unified APIs.",
              "name": "Mobfiq"
            },
            "moblite": {
              "categories": {
                "integration": {
                  "items": ["Developed e-commerce integration through reverse engineering with webscraper and Selenium, connecting hundreds of stores simultaneously", "Created APIs in .NET Core and MongoDB for storage and processing of captured data from multiple platforms", "Implemented automated data synchronization system between platforms without official APIs", "Developed alert system to detect layout changes in stores and quickly adapt selectors and scraping scripts when necessary"],
                  "name": "Integration & Reverse Engineering"
                }
              },
              "description": "E-commerce integration system through reverse engineering, enabling data synchronization without official APIs. Solution developed to connect e-commerce platforms through web scraping and automation.",
              "name": "Moblite (lojaintegrada.com.br)"
            }
          },
          "role": "Senior Technical Lead Developer"
        },
        "purpleMetrics": {
          "description": "Frontend dashboard development for a statistical attribution model platform that analyzes historical data to attribute conversions across all marketing channels (TV, organic social media, OOH, events, influencers, etc.), measuring direct and indirect impacts over time.",
          "location": "Brazil",
          "name": "Purple Metrics",
          "period": "September 2022 - Present",
          "projects": {
            "purpleDashboardV2": {
              "categories": {
                "architecture": {
                  "items": ["Fully defined the frontend project architecture and code standards that were followed by the frontend team (2 developers)", "Implemented Atomic Design-based architecture with reusable components (atoms/molecules/organisms), establishing organization and reuse patterns", "Configured automatic code splitting with page lazy loading for performance optimization", "Developed complete translation system (i18next) with automatic TypeScript type generation to ensure type-safety in translations"],
                  "name": "Architecture & Structure"
                },
                "dataFetching": {
                  "items": ["Implemented data fetching system with React Query and prefetching via route loaders", "Developed runtime data validation with Zod and Axios interceptors", "Optimized performance for large data volumes"],
                  "name": "Data Fetching & Performance"
                },
                "designSystem": {
                  "items": ["Developed custom theme with Tailwind CSS and design system documented in Storybook", "Implemented visual components with Recharts for complex data visualizations"],
                  "name": "Design System & UI"
                },
                "devops": {
                  "items": ["Fully structured CI/CD with GitHub Actions using modular and reusable workflows, avoiding code duplication and facilitating maintenance", "Developed automated system of 5 QA environments (QA-1 to QA-5) with dynamic labels and automatic deployments based on pull requests", "Implemented multi-repository communication for Terraform deployment with GitOps using webhooks to trigger workflows in the infrastructure repository", "Configured secure authentication with AWS OIDC and GitHub App for cross-repository access without needing static secrets", "Developed automated ECR deployment with immutable tags and complete integration with infrastructure as code"],
                  "name": "DevOps & CI/CD"
                },
                "quality": {
                  "items": ["Configured error tracking with Bugsnag and feature flags with ConfigCat", "Configured automatic linting and formatting with ESLint and Prettier"],
                  "name": "Quality & Monitoring"
                }
              },
              "description": "Complete analytics and attribution model platform with interactive dashboards, real-time data visualizations, and marketing campaign performance analysis. Robust data management system with import, validation, and processing of large volumes of information.",
              "name": "Purple Dashboard"
            }
          },
          "role": "Senior Frontend Developer"
        }
      },
      "projectsTitle": "Projects",
      "projectsTitle_one": "{{count}} Project",
      "projectsTitle_other": "{{count}} Projects",
      "subtitle": "A journey through companies and projects that shaped my career",
      "title": "Work Experience"
    },
    "sourceCode": {
      "description": "View the source code for this component",
      "loading": "Loading source code...",
      "title": "Source Code"
    }
  }
}

export default Resources;
