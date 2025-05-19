import React from "react";
import styles from "./feedback.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface RequestFeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  errorMessage?: string;
  successMessage?: string;
}

const Feedback: React.FC<RequestFeedbackModalProps> = ({
  isOpen,
  onClose,
  isLoading = false,
  errorMessage,
  successMessage,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <button onClick={onClose} className={styles.closeButton}>
              ×
            </button>

            {isLoading ? (
              <div className={styles.loadingContainer}>
                <div className={styles.spinner} />
              </div>
            ) : errorMessage ? (
              <div className={styles.error}>
                <h2>Erro</h2>
                <h2>{errorMessage}</h2>
              </div>
            ) : successMessage ? (
              <div className={styles.success}>
                <h2>{successMessage}</h2>
              </div>
            ) : (
              <p className={styles.neutral}>Nada para mostrar</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Feedback;
