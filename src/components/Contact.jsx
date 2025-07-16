import { useState, useEffect } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    useEffect(() => {
        // Initialize EmailJS with your public key
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    }, []);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            // Simplified send (public key already initialized)
            const result = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Shaldan',
                }
            );
            
            console.log('Email sent successfully:', result);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email send failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <section id="contact" className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto pb-20 sm:pb-40 pt-16 sm:pt-24 relative">
            {/* Terminal header */}
            <div className="bg-[#21262d] border border-[#30363d] rounded-t-lg p-4 sm:p-6 mb-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#f85149] rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#ffbd2e] rounded-full"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#238636] rounded-full"></div>
                    <span className="text-[#7d8590] text-xs sm:text-sm font-mono ml-2 sm:ml-3">contact.js</span>
                </div>
                <div className="text-sm">
                    <div className="text-[#7d8590] mb-2">Let's work together</div>
                    <div className="text-[#58a6ff]">Contact & Collaboration</div>
                </div>
            </div>
            
            <div className="bg-[#0d1117] border-x border-b border-[#30363d] rounded-b-lg p-4 sm:p-6 lg:p-8">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#c9d1d9] mb-4 sm:mb-6">
                        Get In <span className="text-[#58a6ff]">Touch</span>
                    </h1>
                    <p className="text-[#7d8590] text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
                        Have a project in mind? Let's discuss how we can bring your ideas to life.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-4 sm:p-6">
                            <h3 className="text-[#c9d1d9] text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
                            
                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#58a6ff] bg-opacity-20 border border-[#58a6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <AiOutlineMail className="text-[#58a6ff] text-lg sm:text-xl" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-[#7d8590] text-xs sm:text-sm font-medium">Email</div>
                                        <a href="mailto:77shaldan77@gmail.com" className="text-[#58a6ff] hover:text-[#c9d1d9] transition-colors duration-300 text-sm sm:text-base break-all">
                                            77shaldan77@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#58a6ff] bg-opacity-20 border border-[#58a6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <AiOutlineEnvironment className="text-[#58a6ff] text-lg sm:text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-[#7d8590] text-xs sm:text-sm font-medium">Location</div>
                                        <div className="text-[#c9d1d9] text-sm sm:text-base">Indonesia</div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#58a6ff] bg-opacity-20 border border-[#58a6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <AiOutlinePhone className="text-[#58a6ff] text-lg sm:text-xl" />
                                    </div>
                                    <div>
                                        <div className="text-[#7d8590] text-xs sm:text-sm font-medium">Response Time</div>
                                        <div className="text-[#c9d1d9] text-sm sm:text-base">Within 24 hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-4 sm:p-6">
                            <h3 className="text-[#c9d1d9] text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect With Me</h3>
                            
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <a 
                                    href="https://github.com/laodeshaldanfalih" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 sm:px-6 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg hover:border-[#58a6ff] hover:bg-[#58a6ff] hover:bg-opacity-10 transition-all duration-300 group flex-1 justify-center sm:justify-start"
                                >
                                    <AiOutlineGithub className="text-[#c9d1d9] text-xl group-hover:text-[#58a6ff] transition-colors duration-300" />
                                    <span className="text-[#7d8590] group-hover:text-[#c9d1d9] transition-colors duration-300 text-sm sm:text-base">GitHub</span>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/laodeshaldanfalih/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 sm:px-6 py-3 bg-[#0d1117] border border-[#30363d] rounded-lg hover:border-[#58a6ff] hover:bg-[#58a6ff] hover:bg-opacity-10 transition-all duration-300 group flex-1 justify-center sm:justify-start"
                                >
                                    <AiFillLinkedin className="text-[#c9d1d9] text-xl group-hover:text-[#58a6ff] transition-colors duration-300" />
                                    <span className="text-[#7d8590] group-hover:text-[#c9d1d9] transition-colors duration-300 text-sm sm:text-base">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-[#21262d] border border-[#30363d] rounded-lg p-4 sm:p-6">
                        <h3 className="text-[#c9d1d9] text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Send Message</h3>
                        
                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-4 p-3 bg-[#238636] bg-opacity-20 border border-[#238636] rounded-md">
                                <p className="text-[#238636] text-sm">Message sent successfully! I'll get back to you soon.</p>
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-4 p-3 bg-[#f85149] bg-opacity-20 border border-[#f85149] rounded-md">
                                <p className="text-[#f85149] text-sm">Failed to send message. Please try again or contact me directly.</p>
                            </div>
                        )}
                        
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div>
                                <label className="block text-[#7d8590] text-xs sm:text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-[#c9d1d9] text-sm sm:text-base focus:border-[#58a6ff] focus:outline-none transition-colors duration-300"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-[#7d8590] text-xs sm:text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-[#c9d1d9] text-sm sm:text-base focus:border-[#58a6ff] focus:outline-none transition-colors duration-300"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label className="block text-[#7d8590] text-xs sm:text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md px-3 sm:px-4 py-2.5 sm:py-3 text-[#c9d1d9] text-sm sm:text-base focus:border-[#58a6ff] focus:outline-none transition-colors duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#238636] focus:ring-offset-2 focus:ring-offset-[#21262d] text-sm sm:text-base ${
                                    isSubmitting 
                                        ? 'bg-[#7d8590] cursor-not-allowed' 
                                        : 'bg-[#238636] hover:bg-[#2ea043] text-white'
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;