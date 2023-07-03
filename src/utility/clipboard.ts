import { toast } from 'react-toastify';

function copy(text?: string | null) {
  try {
    navigator.clipboard.writeText(text || '');
  } catch (error) {
    toast.error(`Failed to copy text to clipboard: ${error}`);
  }
}

export default copy;
