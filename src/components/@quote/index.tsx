import QuotePhrase from './Phrase'
import QuoteIcon from './Icon'

interface QuoteProps {
  phrase: string[];
  author: string;
}

export default function Quote({ phrase, author }: QuoteProps) {
  return (
    <div className="relative flex flex-col items-end justify-center gap-2.5">
      <QuotePhrase phrase={phrase} author={author} />
      <QuoteIcon />
    </div>
  )
}