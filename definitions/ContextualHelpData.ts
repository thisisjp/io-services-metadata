/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { IdpData } from "./IdpData";
import { ScreensCHData } from "./ScreensCHData";
import * as t from "io-ts";

// required attributes
const ContextualHelpDataR = t.interface({
  idps: IdpData,

  screens: ScreensCHData
});

// optional attributes
const ContextualHelpDataO = t.partial({});

export const ContextualHelpData = t.exact(
  t.intersection(
    [ContextualHelpDataR, ContextualHelpDataO],
    "ContextualHelpData"
  )
);

export type ContextualHelpData = t.TypeOf<typeof ContextualHelpData>;
