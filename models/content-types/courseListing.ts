import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type CourseCategory } from '../taxonomies/courseCategory';

/**
 * Generated by '@kontent-ai/model-generator@6.5.1'
 *
 * Course Listing
 * Id: 9a07c109-a78c-487a-b842-1189bf17628f
 * Codename: course_listing
 */
export type CourseListing = IContentItem<{
    /**
     * Course category (taxonomy)
     * Required: false
     * Id: c3d02bcd-1411-49a5-a633-3d7eb656ef55
     * Codename: course_category
     */
    courseCategory: Elements.TaxonomyElement<CourseCategory>;

    /**
     * Title (text)
     * Required: false
     * Id: d0955938-8542-419e-a86b-6ca398e6a8b8
     * Codename: title
     */
    title: Elements.TextElement;
}>;
