# ⚖️ AHP Practice — Lightweight Analytic Hierarchy Process Server

A simple **REST API** that computes **priority vectors** and **consistency metrics** for decision-making problems using the **Analytic Hierarchy Process (AHP)** and **geometric mean** method.

---

## 📂 Project Structure

| File                                     | Description                                                     |
| ---------------------------------------- | --------------------------------------------------------------- |
| **index.js**                             | Entry point — sets up the Express server and routes.            |
| **package.json**                         | Defines dependencies and scripts.                               |
| **src/utils/ahs.js**                     | Core logic for AHP computation orchestration.                   |
| **src/utils/computeConsistancyRatio.js** | Calculates consistency ratio (CR) and λ<sub>max</sub>.          |
| **src/utils/computePriorityVector.js**   | Implements geometric mean method → `weightVectorGeometricMean`. |
| **src/utils/pairwiseMatrix.js**          | Builds pairwise comparison matrices.                            |
| **src/utils/validateMatrix.js**          | Validates reciprocity and dimension correctness.                |

---

## 🚀 Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the server**

   ```bash
   npm start
   # or
   node index.js
   ```

3. **Access the API**

   ```
   http://localhost:5000/api/v1/ahp
   ```

---

## 🔗 API Endpoint

### **POST** `/api/v1/ahp`

**Content-Type:** `application/json`

#### 🧩 Request body format

```json
{
  "criteriaNames": ["Experience", "Technical Skill", "Communication", "Compensation Fit"],
  "alternativeNames": ["Alice", "Bob", "Carol"],
  "dataMatrix": [
    [5, 7, 8, 6],
    [3, 5, 9, 9],
    [7, 9, 6, 5]
  ],
  "benefitFlags": [true, true, true, true]
}
```

#### 🧠 Example (curl)

```bash
curl -X POST http://localhost:5000/api/v1/ahp \
  -H "Content-Type: application/json" \
  -d @sample.json
```

---

## 🧮 What It Computes

| Computation                | Description                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| **Priority Vectors**       | Derived from pairwise matrices using the **Geometric Mean** method.   |
| **Consistency Ratio (CR)** | Ensures judgments are logically consistent (`CR < 0.1` = acceptable). |
| **Normalization**          | Weights are normalized so ∑wᵢ = 1.                                    |

### Geometric Mean Formula

[
g_i = \left(\prod_{j=1}^{n} a_{ij}\right)^{1/n}
]

### Normalized Priority

[
w_i = \frac{g_i}{\sum_{k=1}^{n} g_k}
]

---

## 🧾 Notes

* Ensure `dataMatrix` rows correspond to **alternatives** being compared.
* Matrices must be **positive** and **reciprocal** when applicable.
* See implementation details in:

  * [`src/utils/ahs.js`](src/utils/ahs.js)
  * [`index.js`](index.js)

---

## 🧰 Tech Stack

* **Node.js** + **Express.js**
* **Math.js** for matrix operations
* **Modular utility functions** for validation and computation


