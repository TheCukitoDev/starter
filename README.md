# Cukito starter

## Description

My personal starter project for all my SaaS as I like the tech stack I use and I want to have a consistent way of starting new projects.

## Principles

- **Simplicity**: Keep it simple, stupid.
- **Consistency**: Use the same tech stack for all projects.
- **Quality**: Write clean, maintainable code.
- **Speed**: Develop fast, deploy fast.
- **Security**: Keep it secure.
- **Free at start**: Use free services until you need to scale.
- **Automate**: Automate everything.
- **Mutability**: Be ready to change to other tech stack withouth having to redo it again.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher) for running JavaScript
- [pnpm](https://pnpm.io/), our recommended package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/TheCukitoDev/starter.git
```

or if you use the GH CLI

```bash
gh repo clone TheCukitoDev/starter
```

2. Install the dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm run dev
```

4. Open the browser and go to `http://localhost:3000`

### Configuration

Open the [.env](./.env) file and change the values to your own. You can check the [.env.example](./.env.example) file for the default values.

## Features

- **Authentication**: Authentication with 2FA, magic links, SSO, username and password, acount linking, user impersonation, etc.

- **Authorization**: RBAC, permissions, etc.

- **Billing**: Subscription, invoices, etc.

- **Settings**: User settings, account settings, etc.

- **Notifications**: Email, SMS, push notifications, etc.

- **Integrations**: Google APIs, Stripe, etc.

- **Monitoring**: Logs, metrics, etc.

- **Testing**: Unit tests, integration tests, end-to-end tests, etc.

- **Deployment**: Serverless, Docker, etc.

- **CI/CD**: GitHub Actions, etc.

- **Documentation**: API documentation, user documentation, etc.

- **SEO**: Sitemap, robots.txt, etc.

- **Analytics**: PostHog, etc.

- **Maintainability**: Code quality, code reviews, etc.

- **Security**: OWASP, CORS, etc.

- **Performance**: Lighthouse, etc.

- **Best technologies on their fields**

## Tech stack

### Frontend

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[Next.js](https://nextjs.org/)**: The React framework for production.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs.
- **[SWR](https://swr.vercel.app/)**: React Hooks library for data fetching.

### Backend

- **[Node.js](https://nodejs.org/)**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **[Cosmos DB](https://azure.microsoft.com/en-us/products/cosmos-db)**: A fully managed NoSQL database for modern app development.
- **[Lambda functions](https://aws.amazon.com/en/lambda/)**
- **[T3 Env](https://env.t3.gg)**: A simple and secure way to manage your environment variables.
- **[Cloudflare Pages](https://pages.cloudflare.com/)**: The best platform for deploying your frontend withouth bandwith limits.
- **[Crowdin](https://crowdin.com/)** for translations.
- **[next-intl](https://next-intl-docs.vercel.app/)** for internationalization.

### DevOps

- **[GitHub](https://github.com)** for version control.
- **[GitHub Actions](https://docs.github.com/en/actions)** for CI/CD.
- **[Sentry](https://sentry.io)** for error tracking.
- **[Codecov](https://codecov.io)** for code coverage.
- **[Dependabot](https://dependabot.com)** for dependency updates.

### Monitoring

- **[PostHog](https://posthog.com/)**: Open-source product analytics.
- **[Better Stack](https://betterstack.com/)** for monitoring and status page.
- **[Checkly](https://www.checklyhq.com/)** for API monitoring.

### Security

- **[Clerk](https://clerk.com)** for authentication.
- **[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)** for security.
- **[OWASP](https://owasp.org/)** for security.

### IaaS

- **[SST](https://sst.dev/)** for serverless.

### Payments

- **[Stripe](https://stripe.com)** for payments.

### Analytics

- **[PostHog](https://posthog.com)** for analytics.

### Componetization

- **[Storybook](https://storybook.js.org/)** for component documentation.

### Components

- **[Heroicons](https://heroicons.com/)** for icons.
- **[Shadc/ui](https://ui.shadcn.com)** for components.
- **[MagicUI](https://magicui.design/)** for components.
- **[NextUI](https://nextui.org/)** for components.

### Forms

- **[React Hook Form](https://react-hook-form.com/)** for forms.

### Validation

- **[Zod](https://zod.dev)** for validation.

### Documentation

- **[GitBook](https://gitbook.com/)** for documentation.

### Testing

- **[Vitest](https://vitest.dev/)** for unit tests.
- **[Playwright](https://playwright.dev/)** for end-to-end tests.
- **[Chromatic](https://www.chromatic.com/)** for visual regression tests.

## Usage

### Development

```bash
pnpm run dev
```

### Production

For production, you need to build the project first.

```bash
pnpm run build
```

Then you can start the server.

```bash
pnpm start
```

or deploy it to the cloud.

```bash
pnpm run deploy
```

## Roadmap

Check the roadmap on the project's GH Repo [here](https://github.com/users/TheCukitoDev/projects/4)

## Contributing

Follow the [CONTRIBUTING](./CONTRIBUTING) file.
Please read the [CODE_OF_CONDUCT](./CODE_OF_CONDUCT) file.

## Acknowledgements

- TheCukitoDev for the idea and the project.

## References

## Contact

You can open an issue or contact me at [support@starter.cukito.tech](mailto:support@starter.cukito.tech).

If you want to contact me about a business proposal, you can contact me at [business@starter.cukito.tech](mailto:business@starter.cukito.tech)

## Feedback

Please open a discussion or contact me at [feedback@starter.cukito.tech](mailto:feedback@starter.cukito.tech).

## License

Check the license file [here](./LICENSE).
