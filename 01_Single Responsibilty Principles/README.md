# Single Responsibility Principle (SRP)

<p align="center">
  <img src="./image.png" alt="Single Responsibility Principle (SRP)" width="100%">
</p>

## 📖 Definition

The **Single Responsibility Principle (SRP)** states:

> **A class, module, or function should have only one responsibility and only one reason to change.**

In simple terms:

- ✅ One Class → One Responsibility
- ✅ One Module → One Job
- ✅ One Reason to Change

---

## 🎯 What Does SRP Mean?

Instead of putting multiple responsibilities into a single class, divide them into separate classes where each class focuses on only one task.

For example:

| Class | Responsibility |
|--------|----------------|
| `UserService` | Coordinates the user registration process |
| `UserRepository` | Saves user data to the database |
| `EmailService` | Sends welcome emails |
| `LoggerService` | Logs user activity |

Each class has **only one job**.

---

## 🔄 Workflow

1. Client sends a **Register User** request.
2. `UserService` receives the request.
3. `UserRepository` stores the user in the database.
4. `EmailService` sends a welcome email.
5. `LoggerService` records the activity.
6. `UserService` returns a success response.

---

## ✅ Why Follow SRP?

- Makes code easier to understand.
- Improves maintainability.
- Simplifies testing.
- Reduces bugs.
- Encourages reusable components.
- Makes future changes safer.

---

## ❌ Without SRP

```javascript
class UserService {
    registerUser() {
        // Save user
        // Send email
        // Log activity
    }
}
```

This class has **multiple responsibilities**, so it violates SRP.

---

## ✅ With SRP

```text
UserService
    │
    ├── UserRepository
    ├── EmailService
    └── LoggerService
```

Each class has a **single responsibility**.

---

## 📌 Interview Definition

> **The Single Responsibility Principle (SRP) states that a class, module, or function should have only one responsibility and only one reason to change. This makes software easier to maintain, test, and extend.**

---

## 🧠 Easy Way to Remember

> **One Class = One Job = One Reason to Change**

---
