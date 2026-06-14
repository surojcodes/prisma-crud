# Prisma CRUD

> Setup Prisma 7 with TypeScript (Full ESM support)

A modern, fully-typed CRUD application built with **Prisma 7**, **TypeScript**, and **PostgreSQL**. This project demonstrates best practices for setting up Prisma with full ESM (ECMAScript Module) support, including Docker containerization for database management.

---

## 🎯 Features

- ✅ **Prisma 7** - Latest ORM for Node.js and TypeScript
- ✅ **Full ESM Support** - Native ES modules throughout
- ✅ **TypeScript** - Complete type safety and excellent IDE support
- ✅ **PostgreSQL** - Robust relational database
- ✅ **Docker Compose** - Easy database setup and management
- ✅ **Type-safe Adapter** - Using `@prisma/adapter-pg` for PostgreSQL

---

## 📋 Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Docker** and **Docker Compose** (for PostgreSQL)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/surojcodes/prisma-crud.git
cd prisma-crud
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

The `.env` file should contain:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/my_prisma_app?schema=public"
```

### 4. Start PostgreSQL with Docker

```bash
docker-compose up -d
```

This will start a PostgreSQL 16 database container with the following credentials:
- **User**: `postgres`
- **Password**: `password`
- **Database**: `my_prisma_app`
- **Port**: `5432`

### 5. Set Up the Database Schema

Run Prisma migrations:

```bash
npx prisma migrate dev
```

This will:
- Create your database schema from the Prisma schema
- Generate Prisma Client

### 6. Build and Run

Build the TypeScript code:

```bash
npm run build
```

Start the application:

```bash
npm start
```

---

## 📁 Project Structure

```
prisma-crud/
├── src/                    # TypeScript source code
├── prisma/                 # Prisma configuration and migrations
│   ├── schema.prisma      # Database schema definition
│   └── migrations/        # Database migration files
├── dist/                   # Compiled JavaScript output
├── docker-compose.yml      # Docker database setup
├── prisma.config.ts        # Prisma CLI configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── .env.example            # Environment variables template
└── .gitignore              # Git ignore rules
```

---

## 📦 Dependencies

### Production Dependencies
- **[@prisma/client](https://www.npmjs.com/package/@prisma/client)** `^7.4.1` - Prisma Client for database queries
- **[@prisma/adapter-pg](https://www.npmjs.com/package/@prisma/adapter-pg)** `^7.4.1` - PostgreSQL adapter for Prisma
- **[pg](https://www.npmjs.com/package/pg)** `^8.18.0` - PostgreSQL client library

### Development Dependencies
- **[prisma](https://www.npmjs.com/package/prisma)** `^7.4.1` - Prisma CLI and tooling
- **[typescript](https://www.npmjs.com/package/typescript)** `^5.9.3` - TypeScript compiler
- **[@types/node](https://www.npmjs.com/package/@types/node)** `^25.3.0` - Node.js type definitions
- **[@types/pg](https://www.npmjs.com/package/@types/pg)** `^8.16.0` - PostgreSQL type definitions

---

## 🛠️ Available Scripts

```bash
# Build TypeScript to JavaScript
npm run build

# Start the application
npm start

# Run Prisma migrations
npx prisma migrate dev

# Open Prisma Studio (GUI for database)
npx prisma studio

# Generate Prisma Client
npx prisma generate

# Reset database (be careful!)
npx prisma migrate reset
```

---

## 🗄️ Docker Commands

### Start the Database
```bash
docker-compose up -d
```

### Stop the Database
```bash
docker-compose down
```

### View Database Logs
```bash
docker-compose logs -f db
```

### Access PostgreSQL CLI
```bash
docker-compose exec db psql -U postgres -d my_prisma_app
```

---

## 🔧 Configuration Files

### `tsconfig.json`
TypeScript compiler configuration with ESM support:
- Target: ES2020
- Module: ESNext
- Module Resolution: Node

### `prisma.config.ts`
Prisma CLI configuration for development:
- Schema location: `prisma/schema.prisma`
- Migrations path: `prisma/migrations`
- Database URL from environment variables

### `docker-compose.yml`
PostgreSQL service configuration:
- Image: PostgreSQL 16
- Container name: `my-prisma-db`
- Credentials: `postgres` / `password`
- Database: `my_prisma_app`
- Data persistence: Named volume `postgres_data`

---

## 📝 Usage Example

After setting up the database, you can use Prisma Client in your TypeScript code:

```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create
  const user = await prisma.user.create({
    data: {
      email: 'user@example.com',
      name: 'John Doe',
    },
  })

  // Read
  const allUsers = await prisma.user.findMany()

  // Update
  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { name: 'Jane Doe' },
  })

  // Delete
  await prisma.user.delete({
    where: { id: user.id },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
```

---

## 📚 Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Prisma 7 Release Notes](https://www.prisma.io/blog/prisma-7)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [ESM in Node.js](https://nodejs.org/api/esm.html)

---

## 📝 License

ISC - See LICENSE file for details

---

## 👨‍💻 Author

**Suroj M** - [GitHub](https://github.com/surojcodes)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

---

## 📞 Support

For questions or issues, please open an issue in the [GitHub repository](https://github.com/surojcodes/prisma-crud/issues).
