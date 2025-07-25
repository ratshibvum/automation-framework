# 🔧 Automation Projects Repository

This repository contains multiple automated testing frameworks for different layers of software testing. Each folder is an independent test suite.

---

## 📁 Projects Included

### 1. **selenium-java/**
**Technology:** Java + Selenium + TestNG  
**Description:** UI automation tests for web applications using Maven and TestNG.  
**Run Command:**
```bash
mvn clean test
```

### 2. **cypress-tests/**
**Technology:** Cypress (JavaScript)  
**Description:** End-to-end frontend tests using Cypress framework.  
**Run Command:**
```bash
npx cypress open
```

### 3. **postman-api/**
**Technology:** Postman  
**Description:** Collection for testing API endpoints like login authentication.  
**Usage:**
- Open with [Postman](https://www.postman.com/)
- Import `login.postman_collection.json`

---

## 📌 Setup Instructions

### ✅ Selenium (Java):
- Install [Java JDK 17](https://adoptium.net/)
- Install [Apache Maven](https://maven.apache.org/)
- Update `chromedriver` path in `SmokeTest.java`

### ✅ Cypress:
- Install Node.js
- Run `npm install` inside the `cypress-tests/` folder
- Launch Cypress test runner using `npx cypress open`

---

## 🤝 Contributing
Feel free to fork and expand each framework or add more test layers!

---