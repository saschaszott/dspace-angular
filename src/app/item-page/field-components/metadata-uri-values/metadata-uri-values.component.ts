
import {
  Component,
  Input,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MetadataValue } from '../../../core/shared/metadata.models';
import { MetadataFieldWrapperComponent } from '../../../shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { MetadataValuesComponent } from '../metadata-values/metadata-values.component';

/**
 * This component renders the configured 'values' into the ds-metadata-field-wrapper component as a link.
 * It puts the given 'separator' between each two values
 * and creates an 'a' tag for each value,
 * using the 'linktext' as it's value (if it exists)
 * and using the values as the 'href' attribute (and as value of the tag when no 'linktext' is defined)
 */
@Component({
  selector: 'ds-metadata-uri-values',
  styleUrls: ['./metadata-uri-values.component.scss'],
  templateUrl: './metadata-uri-values.component.html',
  imports: [
    MetadataFieldWrapperComponent,
    TranslateModule,
  ],
  standalone: true,
})
export class MetadataUriValuesComponent extends MetadataValuesComponent {

  /**
   * Optional text to replace the links with
   * If undefined, the metadata value (uri) is displayed
   */
  @Input() linktext: any;

  /**
   * The metadata values to display
   */
  @Input() mdValues: MetadataValue[];

  /**
   * The separator used to split the metadata values (can contain HTML)
   */
  @Input() separator: string;

  /**
   * The label for this iteration of metadata values
   */
  @Input() label: string;
}
