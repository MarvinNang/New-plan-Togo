var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Regions_1 = new ol.format.GeoJSON();
var features_Regions_1 = format_Regions_1.readFeatures(json_Regions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_1.addFeatures(features_Regions_1);
var lyr_Regions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_1, 
                style: style_Regions_1,
                popuplayertitle: 'Regions',
                interactive: true,
                title: '<img src="styles/legend/Regions_1.png" /> Regions'
            });
var format_Locationscores_2 = new ol.format.GeoJSON();
var features_Locationscores_2 = format_Locationscores_2.readFeatures(json_Locationscores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locationscores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locationscores_2.addFeatures(features_Locationscores_2);
var lyr_Locationscores_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Locationscores_2, 
                style: style_Locationscores_2,
                popuplayertitle: 'Location scores',
                interactive: true,
    title: 'Location scores<br />\
    <img src="styles/legend/Locationscores_2_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Locationscores_2_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Locationscores_2_2.png" /> 2 - 3<br />\
    <img src="styles/legend/Locationscores_2_3.png" /> 3 - 4<br />' });
var format_Activesites_3 = new ol.format.GeoJSON();
var features_Activesites_3 = format_Activesites_3.readFeatures(json_Activesites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activesites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activesites_3.addFeatures(features_Activesites_3);
var lyr_Activesites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activesites_3, 
                style: style_Activesites_3,
                popuplayertitle: 'Active sites',
                interactive: true,
                title: '<img src="styles/legend/Activesites_3.png" /> Active sites'
            });
var format_Identifiedsites_4 = new ol.format.GeoJSON();
var features_Identifiedsites_4 = format_Identifiedsites_4.readFeatures(json_Identifiedsites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Identifiedsites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Identifiedsites_4.addFeatures(features_Identifiedsites_4);
var lyr_Identifiedsites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Identifiedsites_4, 
                style: style_Identifiedsites_4,
                popuplayertitle: 'Identified sites',
                interactive: true,
    title: 'Identified sites<br />\
    <img src="styles/legend/Identifiedsites_4_0.png" /> 0 - 2000<br />\
    <img src="styles/legend/Identifiedsites_4_1.png" /> 2000 - 3000<br />\
    <img src="styles/legend/Identifiedsites_4_2.png" /> ≥ 3000<br />' });
var format_PlannedFastChargers_5 = new ol.format.GeoJSON();
var features_PlannedFastChargers_5 = format_PlannedFastChargers_5.readFeatures(json_PlannedFastChargers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedFastChargers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedFastChargers_5.addFeatures(features_PlannedFastChargers_5);
var lyr_PlannedFastChargers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedFastChargers_5, 
                style: style_PlannedFastChargers_5,
                popuplayertitle: 'Planned Fast Chargers',
                interactive: true,
                title: '<img src="styles/legend/PlannedFastChargers_5.png" /> Planned Fast Chargers'
            });
var format_PlannedPetrolStations_6 = new ol.format.GeoJSON();
var features_PlannedPetrolStations_6 = format_PlannedPetrolStations_6.readFeatures(json_PlannedPetrolStations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedPetrolStations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedPetrolStations_6.addFeatures(features_PlannedPetrolStations_6);
var lyr_PlannedPetrolStations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedPetrolStations_6, 
                style: style_PlannedPetrolStations_6,
                popuplayertitle: 'Planned Petrol Stations',
                interactive: true,
                title: '<img src="styles/legend/PlannedPetrolStations_6.png" /> Planned Petrol Stations'
            });
var format_PlannedSolarHubs_7 = new ol.format.GeoJSON();
var features_PlannedSolarHubs_7 = format_PlannedSolarHubs_7.readFeatures(json_PlannedSolarHubs_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlannedSolarHubs_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlannedSolarHubs_7.addFeatures(features_PlannedSolarHubs_7);
var lyr_PlannedSolarHubs_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlannedSolarHubs_7, 
                style: style_PlannedSolarHubs_7,
                popuplayertitle: 'Planned Solar Hubs',
                interactive: true,
                title: '<img src="styles/legend/PlannedSolarHubs_7.png" /> Planned Solar Hubs'
            });
var format_Solarsitesgoinglive_8 = new ol.format.GeoJSON();
var features_Solarsitesgoinglive_8 = format_Solarsitesgoinglive_8.readFeatures(json_Solarsitesgoinglive_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solarsitesgoinglive_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarsitesgoinglive_8.addFeatures(features_Solarsitesgoinglive_8);
var lyr_Solarsitesgoinglive_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarsitesgoinglive_8, 
                style: style_Solarsitesgoinglive_8,
                popuplayertitle: 'Solar sites going live',
                interactive: true,
                title: '<img src="styles/legend/Solarsitesgoinglive_8.png" /> Solar sites going live'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Regions_1.setVisible(true);lyr_Locationscores_2.setVisible(true);lyr_Activesites_3.setVisible(true);lyr_Identifiedsites_4.setVisible(true);lyr_PlannedFastChargers_5.setVisible(true);lyr_PlannedPetrolStations_6.setVisible(true);lyr_PlannedSolarHubs_7.setVisible(true);lyr_Solarsitesgoinglive_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Regions_1,lyr_Locationscores_2,lyr_Activesites_3,lyr_Identifiedsites_4,lyr_PlannedFastChargers_5,lyr_PlannedPetrolStations_6,lyr_PlannedSolarHubs_7,lyr_Solarsitesgoinglive_8];
lyr_Regions_1.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Bike dens': 'Bike dens', 'Percentage': 'Percentage', });
lyr_Locationscores_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_Activesites_3.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', });
lyr_Identifiedsites_4.set('fieldAliases', {'Id': 'Id', 'Site Name': 'Site Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'area sqm': 'area sqm', 'Visit date': 'Visit date', 'Comment': 'Comment', });
lyr_PlannedFastChargers_5.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_PlannedPetrolStations_6.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_PlannedSolarHubs_7.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_Solarsitesgoinglive_8.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', });
lyr_Regions_1.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Bike dens': '', 'Percentage': '', });
lyr_Locationscores_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_Activesites_3.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', });
lyr_Identifiedsites_4.set('fieldImages', {'Id': 'TextEdit', 'Site Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'area sqm': 'TextEdit', 'Visit date': 'TextEdit', 'Comment': 'TextEdit', });
lyr_PlannedFastChargers_5.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PlannedPetrolStations_6.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PlannedSolarHubs_7.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Solarsitesgoinglive_8.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', });
lyr_Regions_1.set('fieldLabels', {'adm1_name': 'inline label - visible with data', 'adm1_name1': 'inline label - visible with data', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'inline label - visible with data', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'Bike dens': 'hidden field', 'Percentage': 'hidden field', });
lyr_Locationscores_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'score': 'inline label - always visible', });
lyr_Activesites_3.set('fieldLabels', {'S/N�': 'hidden field', 'STATION ID': 'hidden field', 'City': 'inline label - always visible', 'prefecture': 'inline label - always visible', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'hidden field', 'Civil Work': 'hidden field', 'Office Sup': 'hidden field', 'Start date': 'hidden field', 'Status': 'inline label - always visible', 'Condition': 'hidden field', });
lyr_Identifiedsites_4.set('fieldLabels', {'Id': 'hidden field', 'Site Name': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'area sqm': 'inline label - always visible', 'Visit date': 'inline label - always visible', 'Comment': 'hidden field', });
lyr_PlannedFastChargers_5.set('fieldLabels', {'S/N�': 'hidden field', 'STATION ID': 'hidden field', 'City': 'inline label - always visible', 'prefecture': 'hidden field', 'STATION NA': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'hidden field', 'Civil Work': 'hidden field', 'Office Sup': 'hidden field', 'Start date': 'hidden field', 'Status': 'hidden field', 'Condition': 'hidden field', 'id': 'hidden field', 'Site_Name': 'hidden field', 'Area': 'hidden field', 'Type': 'inline label - always visible', ' Nb_racks': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PlannedPetrolStations_6.set('fieldLabels', {'S/N�': 'hidden field', 'STATION ID': 'hidden field', 'City': 'inline label - always visible', 'prefecture': 'hidden field', 'STATION NA': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'hidden field', 'Civil Work': 'hidden field', 'Office Sup': 'hidden field', 'Start date': 'hidden field', 'Status': 'hidden field', 'Condition': 'hidden field', 'id': 'hidden field', 'Site_Name': 'hidden field', 'Area': 'hidden field', 'Type': 'inline label - always visible', ' Nb_racks': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PlannedSolarHubs_7.set('fieldLabels', {'S/N�': 'hidden field', 'STATION ID': 'hidden field', 'City': 'inline label - always visible', 'prefecture': 'hidden field', 'STATION NA': 'hidden field', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'hidden field', 'Civil Work': 'hidden field', 'Office Sup': 'hidden field', 'Start date': 'hidden field', 'Status': 'hidden field', 'Condition': 'hidden field', 'id': 'hidden field', 'Site_Name': 'hidden field', 'Area': 'hidden field', 'Type': 'inline label - always visible', ' Nb_racks': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Solarsitesgoinglive_8.set('fieldLabels', {'S/N�': 'hidden field', 'STATION ID': 'hidden field', 'City': 'inline label - always visible', 'prefecture': 'hidden field', 'STATION NA': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Vendor Nam': 'hidden field', 'Civil Work': 'hidden field', 'Office Sup': 'hidden field', 'Start date': 'hidden field', 'Status': 'hidden field', 'Condition': 'hidden field', });
lyr_Solarsitesgoinglive_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});