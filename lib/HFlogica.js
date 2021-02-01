/* *********************************************************************************************************************
*                                                                                                                      
*                                                                                                                      *
*        PROYECTO:     Comparación de un método de encriptación tradicional, y Blockchain en un entorno IoT                                                                                             *
*           ARCHIVO:     HFmodelo.cto                                                                                   *
*                                                                                                                      
*                                                                                                                      *
*    DESCRIPCION:     Define los diferentes recursos de la red HF                    *
*                                                                                                                           ---                                                                                              *
*   REQUERIMIENTOS:     Business network deployed in Hyperledger Fabric                                                   ---                                                                                              *
*         AUTOR:     MARCELA GIL SANHUEZA ---                                                                                              *
*        VERSION:     1.0                                                                                         *
*        CREATED:     31/01/2021                                                                                         *
*       REVISION:                                                                                             *
*                                                                                                                      *
*
/* *********************************************************************************************************************/

/* global getAssetRegistry getFactory */

'use strict';

/**
 * Publica una nueva medicion
 * @param {org.HF.Red.PublicaMedicion} PublicaMedicion The publicaMedicion transaction
 * @transaction
 */
async function publish(publicaMedicion) {

    const registry = await getAssetRegistry('org.hf.red.Medicion');
    const factory = getFactory();

    // Creates the alert asset
    const alertAsset = factory.newResource('org.hf.red', 'Medicion', publish_alert.alert_id);
    alert_asset.alert_details = publish_alert.alert_details;

    // Adds the alert asset to the registry
    await registry.add(alert_asset);
}
