import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'Resumes_.pdf';
    link.download = 'Resumes_.pdf';
    link.click();
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          <motion.p className="text-slate-300 mt-6 max-w-2xl mx-auto" variants={fadeUp} custom={2}>
            I'm always open to discussing new opportunities and interesting projects. Let's connect and build something amazing together!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          {/* Form */}
          <motion.div className="bg-slate-800 p-8 rounded-2xl shadow-lg" variants={fadeUp} custom={4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email"].map((field, i) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-slate-300 mb-2 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder={`Your ${field}`}
                    required
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="Your message here..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Info Cards */}
          <div className="space-y-8">
            {[
              {
                title: "Contact Information",
                content: (
                  <>
                    <div className="flex items-center space-x-4">
                      <i className="fas fa-envelope text-blue-400 text-xl"></i>
                      <div>
                        <p className="text-slate-300">Email</p>
                        <a href="mailto:pandeyharsh73099@gmail.com" className="text-blue-400 hover:text-blue-300">
                          pandeyharsh73099@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                      <i className="fas fa-phone text-blue-400 text-xl"></i>
                      <div>
                        <p className="text-slate-300">Phone</p>
                        <a href="tel:+916394323401" className="text-slate-400 hover:text-blue-400">
                          +91-6394323401
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                      <i className="fas fa-map-marker-alt text-blue-400 text-xl"></i>
                      <div>
                        <p className="text-slate-300">Location</p>
                        <p className="text-slate-400">Varanasi, India</p>
                      </div>
                    </div>
                  </>
                )
              },
              {
                title: "Follow Me",
                content: (
                  <div className="flex space-x-4">
                    {[
                      { icon: "fab fa-github", href: "https://github.com/Abhi03072003" },
                      { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/abhishek-pandey-8452622b8/" },
                      { icon: "fas fa-envelope", href: "mailto:pandeyharsh73099@gmail.com" }
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-900 p-3 rounded-xl text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        <i className={`${item.icon} text-2xl`}></i>
                      </a>
                    ))}
                  </div>
                )
              },
              {
                title: "Download Resume",
                content: (
                  <>
                    <p className="text-slate-300 mb-4">
                      Get a copy of my resume to learn more about my experience and skills.
                    </p>
                    <button
                      onClick={handleDownloadResume}
                      className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white font-medium py-3 px-6 rounded-xl transition-colors duration-300"
                    >
                      <i className="fas fa-download mr-2"></i> Download Resume
                    </button>
                  </>
                )
              }
            ].map((info, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-8 rounded-2xl shadow-lg"
                variants={fadeUp}
                custom={5 + index}
              >
                <h3 className="text-2xl font-semibold text-blue-400 mb-6">{info.title}</h3>
                {info.content}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
