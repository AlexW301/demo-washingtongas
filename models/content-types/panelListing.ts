import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Panel } from './panel';

/**
 * Generated by '@kontent-ai/model-generator@5.10.0'
 *
 * Panel Listing
 * Id: 507ad995-6abb-48a7-b3cf-df8fe45ff8ff
 * Codename: panel_listing
 */
export type PanelListing = IContentItem<{
  /**
   * Heading (text)
   * Required: false
   * Id: 825bd606-122b-425e-8403-4beb79181ada
   * Codename: heading
   */
  heading: Elements.TextElement;

  /**
   * Orientation (multiple_choice)
   * Required: true
   * Id: 085d12ae-8b7e-4086-87fa-89b47ec442d0
   * Codename: orientation
   */
  orientation: Elements.MultipleChoiceElement;

  /**
   * Panels (modular_content)
   * Required: false
   * Id: f77bc4f3-3619-4b19-a32b-f2e282f48e11
   * Codename: panels
   */
  panels: Elements.LinkedItemsElement<Panel>;
}>;