import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Travon Mayo</h1>
        <p className="text-xl opacity-90">Aspiring Cloud Engineer | AWS Enthusiast</p>
      </header>

      {/* Container for sections */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* About Section */}
        <section id="about" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4 border-b-4 border-purple-600 pb-2">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Entry-level cloud engineer with hands-on AWS experience in infrastructure automation, 
            security, and Infrastructure as Code. Passionate about building scalable, secure cloud 
            solutions and following AWS best practices.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Currently seeking opportunities to apply my skills in cloud engineering, DevOps, or 
            AWS-focused roles where I can contribute to building and maintaining cloud infrastructure.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 border-b-4 border-purple-600 pb-2">
            Projects
          </h2>
          
          {/* Project Cards */}
          <div className="space-y-6">
            {/* Project 1 */}
            <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded hover:translate-x-2 transition-transform">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                IAM Security Implementation
              </h3>
              <p className="text-gray-600 mb-4">
                Implemented comprehensive IAM security policies following the principle of least 
                privilege. Created role-based access controls, service control policies, and automated 
                permission management using Terraform.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">AWS IAM</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Terraform</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Security</span>
              </div>
              <a 
                href="https://github.com/travonmayo/iam-project" 
                target="_blank"
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded hover:translate-x-2 transition-transform">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Infrastructure As Code Migration
              </h3>
              <p className="text-gray-600 mb-4">
                Migrated a company's manually-created AWS infrastructure from console-based deployment 
                to fully automated Infrastructure as Code using AWS CDK. Improved deployment consistency, 
                version control, and disaster recovery capabilities.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">AWS CDK</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">TypeScript</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">CloudFormation</span>
              </div>
              <a 
                href="https://github.com/travonmayo/iac-migration" 
                target="_blank"
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                View on GitHub →
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-50 border-l-4 border-purple-600 p-6 rounded hover:translate-x-2 transition-transform">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                AWS Static Portfolio Website
              </h3>
              <p className="text-gray-600 mb-4">
                Built this serverless portfolio website using Next.js, S3, CloudFront, and AWS CDK. 
                Implemented secure origin access, HTTPS encryption, and automated deployment pipelines. 
                Cost-optimized to run for under $2/month with purchased domain, or free without a domain.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">S3</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">CloudFront</span>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">CDK</span>
              </div>
              <a 
                href="https://github.com/travonmayo/aws-portfolio" 
                target="_blank"
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section - ADDED BACK */}
        <section id="skills" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 border-b-4 border-purple-600 pb-2">
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">AWS (S3, EC2, IAM, CloudFront)</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Terraform</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">AWS CDK</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Next.js</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">TypeScript</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Python</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Git/GitHub</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Infrastructure as Code</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">Cloud Security</span>
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm">React</span>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-6 border-b-4 border-purple-600 pb-2">
            Contact
          </h2>
          <div className="flex justify-center gap-8 text-lg">
            <a 
              href="https://github.com/vonongit" 
              target="_blank" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/travon-mayo" 
              target="_blank" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:travon@example.com" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <SiGmail className="text-2xl" />
              <span>Email</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 bg-white mt-12">
        <p>Built with Next.js, AWS S3, CloudFront, and CDK | © 2025</p>
      </footer>
    </main>
  );
}