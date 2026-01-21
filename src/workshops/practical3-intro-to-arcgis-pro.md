---
layout: layout.njk
title: Practical 3 – Introduction to ArcGIS Pro
tags: workshop
toc: true
---

## Aims
This practical will introduce you to the GIS package which we will be primarily using on this module. ArcGIS Pro is a full-featured commercial GIS software package produced by ESRI (Environmental Systems Research Institute) that contains a wide range of tools for the management, display and analysis of spatial data. 

In this practical you will learn:

- How to locate and manage spatial data in ArGIS Pro
- How to use the ArcGIS Pro interface
- How to change symbols in ArcGIS Pro
- How to measure spatial data in ArcGIS Pro
- How to produce simple maps within ArcGIS Pro. 

## File management – Best Practice

Working with GIS can result in lots of files, often quite large. In order to manage your work, we are giving you some guidance on how to manage them.
You may find it useful to keep a copy of all practical workings so that you can revisit them for the assessments. Here are some general suggestions on how and where to store the work from your practical classes.

- Make sure you save work to your **U: drive**. This way you can [access the work on any networked computer and even off campus](https://students.sheffield.ac.uk/it-services/account-essentials/store-your-files). Do **NOT** save work to the C: drive, the data would only be saved on that PC and may be deleted after you log off.
- Create a folder for the module and ensure work from each practical is saved in a separate folder within that e.g. a folder called TRP216 and then other folders in that called *Practical1, Practical2* etc.
- **Do not** use spaces in folder names or file names you use for GIS. Sometimes this can cause problems with GIS software. Either use an underscore instead ‘_’ or leave out the spaces.
- **If copying work to a USB stick, the easiest way to do it is to copy a full directory**, GIS data is often stored in several separate files or the same filename but with different file extensions. It is easy to miss one or more of them when copying individual files and this can stop the data from being accessed correctly by GIS software. If you need to email or transfer GIS data that is made up of several files another option is to sort the files by name and select all files, regardless of the file extension, with the same filename. These can be added to an email or better still added to a zip file first before adding as an email attachment.
- **Use meaningful file names** when saving data. File names such as essay.doc or map.mxd do not tell you too much information about the file, particularly after some time has passed. Longer, more meaningful file names will help. E.g. TRP216_Individual_Report.doc or Practical2_SYAverageAge.mxd
- Check your filestore to ensure you are not reaching the limit of your storage space. If you are you may need to archive older work and folders to a USB drive or a CD/DVD. It is also possible to save your work directly to a USB drive, you may find however that larger data files are slower to respond and load from these.
- **Make sure you save your work frequently**.

## Part 1: First steps with ArcGIS Pro

{% task "We will start by downloading the data for Practical 3 Part 1.", "link" %}
1. In your Week 4 Learning Materials folder, open the **Downloads for week 4** page.
2. Download both data sets (**Vector_layers.zip** and **MSOA_2021_Sheff_TS007.zip**) by clicking on the three dots.
3. Open a folder to view the downloaded zip file. **The files in the zip file need to be extracted so that you can access the data using the ArcGIS Pro software**.
{% endtask %}

{% task "Large files!", "warning" %}
Files used for GIS are often large so will often come in a compressed format. When you see files with a .zip extension, they will need to be extracted before you can use them with GIS software. 

To extract a compressed file, right-click on the .zip file and select Extract… or Extract All…
{% endtask %}
