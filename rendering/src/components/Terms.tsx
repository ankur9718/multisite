import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type TermsProps = ComponentProps & {
  fields: {
    "article-body": Field<string>;
    "article-header": Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const Terms = ({ fields }: TermsProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={fields["article-header"]} />

    <RichText className="contentDescription" field={fields["article-body"]} />
  </div>
);

export default withDatasourceCheck()<TermsProps>(Terms);
