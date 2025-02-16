import { Heading, List, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiCheckCircle } from "react-icons/bi";
import Markdown from "react-markdown";

interface AiMarkdownProps {
  children: ReactNode | string;
}

function AiMarkdown({ children }: AiMarkdownProps) {
  return (
    <Markdown
      components={{
        // Customize headings
        h2: ({ node, ...props }) => (
          <Heading as="h2" {...props} fontWeight="bold" fontSize="xl" />
        ),
        h3: ({ node, ...props }) => (
          <Heading as="h3" {...props} fontWeight="bold" fontSize="lg" />
        ),
        h4: ({ node, ...props }) => (
          <Heading as="h4" {...props} fontWeight="bold" fontSize="md" />
        ),
        // Customize paragraphs
        p: ({ node, ...props }) => <Text lineHeight="tall" {...props} mb={6} />,
        // Customize lists
        ul: ({ node, ...props }) => <List.Root gap={2} {...props} mb={6} />,
        li: ({ node, ...props }) => (
          <List.Item display="flex" alignItems="start" justifyItems="center">
            <List.Indicator asChild color="blue.500">
              <BiCheckCircle />
            </List.Indicator>
            <Text as="span" {...props} />
          </List.Item>
        ),
        // Customize bold text
        strong: ({ node, ...props }) => (
          <Text as="strong" fontWeight="bold" color="blue.500" {...props} />
        ),
      }}
    >
      {children}
    </Markdown>
  );
}

export default AiMarkdown;
