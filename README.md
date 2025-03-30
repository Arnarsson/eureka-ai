# Eureka.ai

An AI-powered development assistant that helps streamline your development workflow.

## Features

- Task-driven development workflow
- AI-powered code analysis and suggestions
- Component-based React architecture
- TypeScript for type safety
- Tailwind CSS for styling
- Zustand for state management

## Project Structure

```
src/
  ├── components/     # React components
  ├── hooks/         # Custom React hooks
  ├── store/         # Zustand stores
  ├── api/           # API endpoints
  └── utils/         # Utility functions

backend/
  ├── api/           # Backend API endpoints
  └── tools/         # Backend utilities

tests/               # Test files
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Arnarsson/eureka-ai.git
   cd eureka-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

- Follow TypeScript strict mode
- Use Tailwind CSS for styling
- Implement proper error boundaries
- Write comprehensive tests
- Follow accessibility standards
- Use conventional commit messages

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'feat: add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details