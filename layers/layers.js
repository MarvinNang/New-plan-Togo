var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_togo_new_scores_1 = new ol.format.GeoJSON();
var features_togo_new_scores_1 = format_togo_new_scores_1.readFeatures(json_togo_new_scores_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_togo_new_scores_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_togo_new_scores_1.addFeatures(features_togo_new_scores_1);
var lyr_togo_new_scores_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_togo_new_scores_1, 
                style: style_togo_new_scores_1,
                popuplayertitle: 'togo_new_scores',
                interactive: true,
    title: 'togo_new_scores<br />\
    <img src="styles/legend/togo_new_scores_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/togo_new_scores_1_1.png" /> 1 - 2<br />\
    <img src="styles/legend/togo_new_scores_1_2.png" /> 2 - 3<br />\
    <img src="styles/legend/togo_new_scores_1_3.png" /> 3 - 4<br />\
    <img src="styles/legend/togo_new_scores_1_4.png" /> 4 - 5<br />' });
var format_Districts_2 = new ol.format.GeoJSON();
var features_Districts_2 = format_Districts_2.readFeatures(json_Districts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_2.addFeatures(features_Districts_2);
var lyr_Districts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districts_2, 
                style: style_Districts_2,
                popuplayertitle: 'Districts',
                interactive: true,
                title: '<img src="styles/legend/Districts_2.png" /> Districts'
            });
var format_Regions_3 = new ol.format.GeoJSON();
var features_Regions_3 = format_Regions_3.readFeatures(json_Regions_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_3.addFeatures(features_Regions_3);
var lyr_Regions_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_3, 
                style: style_Regions_3,
                popuplayertitle: 'Regions',
                interactive: true,
                title: '<img src="styles/legend/Regions_3.png" /> Regions'
            });
var format_TouchpointsTogo_4 = new ol.format.GeoJSON();
var features_TouchpointsTogo_4 = format_TouchpointsTogo_4.readFeatures(json_TouchpointsTogo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TouchpointsTogo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TouchpointsTogo_4.addFeatures(features_TouchpointsTogo_4);
var lyr_TouchpointsTogo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TouchpointsTogo_4, 
                style: style_TouchpointsTogo_4,
                popuplayertitle: 'Touch points Togo',
                interactive: true,
    title: 'Touch points Togo<br />\
    <img src="styles/legend/TouchpointsTogo_4_0.png" /> Fast charger<br />\
    <img src="styles/legend/TouchpointsTogo_4_1.png" /> Petro Station<br />\
    <img src="styles/legend/TouchpointsTogo_4_2.png" /> Solar Hub<br />\
    <img src="styles/legend/TouchpointsTogo_4_3.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_togo_new_scores_1.setVisible(true);lyr_Districts_2.setVisible(true);lyr_Regions_3.setVisible(true);lyr_TouchpointsTogo_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_togo_new_scores_1,lyr_Districts_2,lyr_Regions_3,lyr_TouchpointsTogo_4];
lyr_togo_new_scores_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'score': 'score', });
lyr_Districts_2.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_Regions_3.set('fieldAliases', {'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Bike dens': 'Bike dens', 'Percentage': 'Percentage', });
lyr_TouchpointsTogo_4.set('fieldAliases', {'S/N�': 'S/N�', 'STATION ID': 'STATION ID', 'City': 'City', 'prefecture': 'prefecture', 'STATION NA': 'STATION NA', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Vendor Nam': 'Vendor Nam', 'Civil Work': 'Civil Work', 'Office Sup': 'Office Sup', 'Start date': 'Start date', 'Status': 'Status', 'Condition': 'Condition', 'id': 'id', 'Site_Name': 'Site_Name', 'Area': 'Area', 'Type': 'Type', ' Nb_racks': ' Nb_racks', 'layer': 'layer', 'path': 'path', });
lyr_togo_new_scores_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'score': 'TextEdit', });
lyr_Districts_2.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_Regions_3.set('fieldImages', {'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Bike dens': '', 'Percentage': '', });
lyr_TouchpointsTogo_4.set('fieldImages', {'S/N�': 'TextEdit', 'STATION ID': 'TextEdit', 'City': 'TextEdit', 'prefecture': 'TextEdit', 'STATION NA': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Vendor Nam': 'TextEdit', 'Civil Work': 'TextEdit', 'Office Sup': 'TextEdit', 'Start date': 'TextEdit', 'Status': 'TextEdit', 'Condition': 'TextEdit', 'id': 'TextEdit', 'Site_Name': 'TextEdit', 'Area': 'TextEdit', 'Type': 'TextEdit', ' Nb_racks': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_togo_new_scores_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'score': 'inline label - always visible', });
lyr_Districts_2.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'inline label - always visible', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_Regions_3.set('fieldLabels', {'adm1_name': 'no label', 'adm1_name1': 'inline label - always visible', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', 'Bike dens': 'no label', 'Percentage': 'no label', });
lyr_TouchpointsTogo_4.set('fieldLabels', {'S/N�': 'no label', 'STATION ID': 'no label', 'City': 'no label', 'prefecture': 'no label', 'STATION NA': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Vendor Nam': 'no label', 'Civil Work': 'no label', 'Office Sup': 'no label', 'Start date': 'no label', 'Status': 'no label', 'Condition': 'no label', 'id': 'no label', 'Site_Name': 'no label', 'Area': 'no label', 'Type': 'inline label - always visible', ' Nb_racks': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TouchpointsTogo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});