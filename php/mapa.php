 <td>'; ?>
                            <!--verificamos la subida de imagen con php-->
                            <?php
                                @$actualizar = $_REQUEST['actualizar'];
                                @$error = false;
                                //array de archivos disponibles
                                @$archivos_disp_ar = array('jpg', 'jpeg', 'gif', 'png');
                                //carpteta donde vamos a guardar la imagen
                                @$carpeta = 'user/';
                                //recibimos el campo de imagen
                                @$imagen = $_FILES['imagen']['tmp_name'];
                                //guardamos el nombre original de la imagen en una variable
                                @$nombrebre_orig = $_FILES['imagen']['name'];
                                //el proximo codigo es para ver que extension es la imagen
                                @$array_nombre = explode('.',$nombrebre_orig);
                                @$cuenta_arr_nombre = count($array_nombre);
                                @$extension = strtolower($array_nombre[--$cuenta_arr_nombre]);
                                //creamos nuevo nombre para que tenga nombre unico
                                @$nombre_nuevo = time().'_'.rand(0,100).'.'.$extension;
                                //nombre nuevo con la carpeta
                                @$nombre_nuevo_con_carpeta = $carpeta.$nombre_nuevo;
 
                             if (isset($actualizar))
                             {//ingreso datos
                                      if(!in_array($extension, $archivos_disp_ar))
                                      {
                                       {
                                         @$errores["imagen"]="Esto no es una imagen";
                                         $error = true;
                                       }
                                      if(trim($imagen)== "")
                                        {
                                         @$errores["imagen"]="Ingrese una imagen";
                                         $error = true;
                                        }
                                      }
                                      else
                                        @$errores["imagen"]="";
                             }
                        // Si los datos son correctos, procesar formulario
                        if (isset($actualizar) && $error==false)
                        {
                             
                            $id= $_SESSION ['MM_Id'];
                            $actualiza="Update login_php_mysql_foto_prefil Set foto_user='$nombre_nuevo' Where id_user='$id'";
                            $resultado = $link->query($actualiza);
                            $mover_archivos = move_uploaded_file($imagen , $nombre_nuevo_con_carpeta);
                             
                            $_SESSION['MM_Foto_user'] = NULL;
                            unset($_SESSION['MM_Foto_user']);
                             
                            $select_foto = "SELECT foto_user FROM login_php_mysql_foto_prefil WHERE id_user='$id'" or die("Error en la consulta" . mysqli_error($link));
                            $res_foto = $link->query($select_foto);
                            $ses = $res_foto->fetch_assoc();
                            $_SESSION['MM_Foto_user'] = $ses['foto_user'];
                             
                            //echo "<img src='" . $carpeta . $nombre_nuevo . "' alt='' width='100' height='100' />";
                            //echo "<br/>";
                            echo "Se le asignó nuevo Nombre de imagen  :  " . $nombre_nuevo;
                            echo'<img style="width:40%; margin-top:10px;" src="user/'.$_SESSION['MM_Foto_user'].'" alt="'.$_SESSION['MM_Nick_user'].'"/>';
                             
                        }
                          else
                            {
                            ?>
                         
                          
                          <?PHP
                            }
                          ?>
 
                         <?php
                        echo '</td>