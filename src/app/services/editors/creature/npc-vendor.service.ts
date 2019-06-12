import { Injectable } from '@angular/core';

import { MultiRowEditorService } from '../multi-row-editor.service';
import { CreatureHandlerService } from '../../handlers/creature-handler.service';
import { QueryService } from '../../query.service';
import {
NPC_VENDOR_ID,
NPC_VENDOR_ID_2,
NPC_VENDOR_TABLE,
NpcVendor
} from '../../../components/editors/creature/npc-vendor/npc-vendor.type';

@Injectable({
  providedIn: 'root'
})
export class NpcVendorService extends MultiRowEditorService<NpcVendor> {
  constructor(
    protected handlerService: CreatureHandlerService,
    protected queryService: QueryService,
  ) {
    super(
      NpcVendor,
      NPC_VENDOR_TABLE,
      NPC_VENDOR_ID,
      NPC_VENDOR_ID_2,
      handlerService,
      queryService,
    );
  }
}