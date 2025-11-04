import { Mail, Linkedin, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-32 flex items-center">
      <div className="max-w-screen-2xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-muted-foreground mb-2 text-sm">[CONTACT]</p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[1px] bg-foreground/20"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-sm md:text-base leading-relaxed">
              Available for commissioned work, collaborations, and inquiries.
              Let's create something meaningful together.
            </p>

            <Link to="/cv">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm"
              >
                <Download size={18} />
                <span>VIEW & DOWNLOAD CV</span>
              </motion.div>
            </Link>
            
            <div className="space-y-4 text-sm">
              <motion.a 
                href="mailto:stefania_solari@hotmail.it"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 hover:opacity-50 transition-opacity duration-300 group"
              >
                <Mail size={18} className="text-muted-foreground" />
                <span>STEFANIA_SOLARI@HOTMAIL.IT</span>
              </motion.a>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="w-[18px]" />
                <span>BASED IN EUROPE</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <p className="text-muted-foreground mb-4 text-sm">SOCIAL</p>
              <div className="space-y-3 text-sm">
                <motion.a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 hover:opacity-50 transition-opacity duration-300"
                >
                  <Linkedin size={18} className="text-muted-foreground" />
                  <span>LINKEDIN</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-32 pt-8 border-t border-border/50"
        >
          <p className="text-muted-foreground text-xs">© 2025 STEFANIA SOLARI. ALL RIGHTS RESERVED.</p>
        </motion.div>
      </div>
    </section>
  );
}
